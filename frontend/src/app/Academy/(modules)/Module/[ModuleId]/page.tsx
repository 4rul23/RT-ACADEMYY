/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useState } from 'react'
import { BookOpen, Play, Flag, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { cssModuleData } from './data'
import { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react'

interface ModuleContent {
  markdown?: string
  videoUrl?: string
  instructions?: string
  starterCode?: string
  solution?: string
}

export default function ModuleDetailPage({ params }: { params: { moduleId: string } }) {
  const [currentSection, setCurrentSection] = useState(0)
  const [completedSections, setCompletedSections] = useState<number[]>([])

  const renderContent = (content: ModuleContent) => {
    if (!content) return null

    return (
      <div className="prose prose-invert prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-700 max-w-none">
        <ReactMarkdown
          className="markdown-content"
          components={{
            h1: ({ ...props }: ReactMarkdownProps) => (
              <h1 className="text-3xl font-bold mb-6 mt-8" {...props} />
            ),
            h2: ({ ...props }: ReactMarkdownProps) => (
              <h2 className="text-2xl font-semibold mb-4 mt-6" {...props} />
            ),
            p: ({ node, ...props }: ReactMarkdownProps) => (
              <p className="mb-4 leading-relaxed" {...props} />
            ),
            ul: ({ node, ...props }: ReactMarkdownProps) => (
              <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />
            ),
            li: ({ node, ...props }: ReactMarkdownProps) => (
              <li className="text-gray-300" {...props} />
            ),
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <div className="my-4">
                  <SyntaxHighlighter
                    style={atomDark as { [key: string]: React.CSSProperties }}
                    language={match[1]}
                    PreTag="div"
                    className="rounded-lg !bg-gray-800/50 !p-4 border border-gray-700"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                </div>
              ) : (
                <code className="bg-gray-800 px-1.5 py-0.5 rounded text-sm" {...props}>
                  {children}
                </code>
              )
            }
          }}
        >
          {content.markdown || ''}
        </ReactMarkdown>
      </div>
    )
  }

  const navigateAndComplete = (index: number) => {
    if (index >= 0 && index < cssModuleData.sections.length) {
      if (!completedSections.includes(currentSection)) {
        setCompletedSections([...completedSections, currentSection])
      }
      setCurrentSection(index)
    }
  }

  return (
    <main className="min-h-screen bg-[#0A1525]">
      {/* Progress bar */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500"
           style={{ width: `${((currentSection + 1) / cssModuleData.sections.length) * 100}%` }} />

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <nav className="w-80 flex-shrink-0">
            <div className="sticky top-8 space-y-1">
              {cssModuleData.sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => setCurrentSection(index)}
                  className={`w-full px-4 py-3 flex items-center gap-3 rounded-lg text-left
                    ${currentSection === index
                      ? 'bg-cyan-500/10 text-cyan-400'
                      : 'text-gray-400 hover:bg-gray-800/50'}`}
                >
                  {section.type === 'video' && <Play className="w-4 h-4" />}
                  {section.type === 'reading' && <BookOpen className="w-4 h-4" />}
                  {section.type === 'exercise' && <Flag className="w-4 h-4" />}
                  <span className="flex-1 text-sm font-medium">{section.title}</span>
                  {completedSections.includes(index) && (
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  )}
                </button>
              ))}
            </div>
          </nav>

          {/* Main Content */}
          <div className="flex-1 max-w-3xl">
            <h1 className="text-3xl font-bold mb-2 text-white">
              {cssModuleData.sections[currentSection].title}
            </h1>
            <p className="text-gray-400 mb-8">
              {cssModuleData.description}
            </p>

            {cssModuleData.sections[currentSection].type === 'video' && (
              <div className="aspect-video mb-8 rounded-lg overflow-hidden bg-gray-900">
                <iframe
                  className="w-full h-full"
                  src={cssModuleData.sections[currentSection].content.videoUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                  allowFullScreen
                />
              </div>
            )}

            {/* Add this style to preserve whitespace */}
            <div style={{ whiteSpace: 'pre-line' }}>
              {renderContent(cssModuleData.sections[currentSection].content)}
            </div>

            {/* Exercise Section */}
            {cssModuleData.sections[currentSection].type === 'exercise' && (
              <div className="mt-8 p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                <h2 className="text-xl font-semibold text-white mb-4">Exercise</h2>
                <p className="text-gray-300 mb-6">
                  {cssModuleData.sections[currentSection].content.instructions}
                </p>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <pre className="text-sm text-gray-300">
                    <code>{cssModuleData.sections[currentSection].content.starterCode}</code>
                  </pre>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
              <button
                onClick={() => navigateAndComplete(currentSection - 1)}
                disabled={currentSection === 0}
                className="px-6 py-2 rounded-lg border border-gray-800 text-gray-300 disabled:opacity-50"
              >
                <ArrowLeft className="w-4 h-4 inline mr-2" /> Previous
              </button>
              <button
                onClick={() => navigateAndComplete(currentSection + 1)}
                disabled={currentSection === cssModuleData.sections.length - 1}
                className="px-6 py-2 rounded-lg bg-cyan-500 text-white disabled:opacity-50"
              >
                Next <ArrowRight className="w-4 h-4 inline ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

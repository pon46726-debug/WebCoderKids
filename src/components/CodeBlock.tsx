import React from 'react';
import { Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: 'html' | 'css' | 'javascript';
  showCopy?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'html', showCopy = true }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  const highlightCode = (code: string) => {
    if (language === 'html') {
      return code
        .replace(/(&lt;!DOCTYPE[^&]*&gt;|&lt;\/?[a-z0-9]+&gt;|&lt;[a-z0-9]+|&lt;\/[a-z0-9]+&gt;)/gi, '<span class="tag">$1</span>')
        .replace(/([a-z-]+)=/gi, '<span class="attr">$1</span>=')
        .replace(/"([^"]*)"/g, '<span class="value">"$1"</span>');
    } else if (language === 'css') {
      return code
        .replace(/(\.[a-z0-9_-]+|#[a-z0-9_-]+|[a-z]+)\s*\{/gi, '<span class="keyword">$1</span> {')
        .replace(/([a-z-]+):/gi, '<span class="attr">$1</span>:')
        .replace(/:\s*([^;]+);/g, ': <span class="value">$1</span>;')
        .replace(/\/\/.*$/gm, '<span class="comment">$&</span>');
    } else if (language === 'javascript') {
      return code
        .replace(/\b(let|const|var|function|return|if|else|for|while)\b/g, '<span class="keyword">$1</span>')
        .replace(/\b(console|log|document|window)\b/g, '<span class="function">$1</span>')
        .replace(/"([^"]*)"/g, '<span class="string">"$1"</span>')
        .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
        .replace(/\/\/.*$/gm, '<span class="comment">$&</span>');
    }
    return code;
  };

  const escapeHtml = (unsafe: string): string => {
    return unsafe
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  const escapedCode = escapeHtml(code);
  const highlightedCode = highlightCode(escapedCode);

  return (
    <div className="relative">
      {showCopy && (
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10"
        >
          <Copy className="w-4 h-4" />
        </button>
      )}
      <pre
        className="code-block text-sm overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </div>
  );
};

export default CodeBlock;

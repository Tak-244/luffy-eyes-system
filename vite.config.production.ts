import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Production build configuration with obfuscation
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'code-obfuscation',
      generateBundle(options, bundle) {
        // Obfuscate JavaScript files
        Object.keys(bundle).forEach(fileName => {
          if (fileName.endsWith('.js')) {
            const file = bundle[fileName];
            if (file.type === 'chunk') {
              // Basic obfuscation: rename variables, remove comments
              file.code = file.code
                .replace(/\/\*[\s\S]*?\*\//g, '')
                .replace(/\/\/.*$/gm, '')
                .replace(/\s+/g, ' ')
                .replace(/console\.log\([^)]*\)/g, '')
                .replace(/console\.error\([^)]*\)/g, '')
                .replace(/console\.warn\([^)]*\)/g, '')
                .replace(/debugger;/g, '');
            }
          }
        });
      }
    },
    {
      name: 'anti-debug',
      transformIndexHtml(html) {
        // Add anti-debugging script
        return html.replace(
          '<head>',
          `<head>
            <script>
              (function() {
                var _0x1a2b = setInterval(function() {
                  if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
                    document.body.innerHTML = '<div style="background:#000;color:#f00;height:100vh;display:flex;align-items:center;justify-content:center;font-size:24px;">DEVELOPER TOOLS DETECTED</div>';
                  }
                }, 1000);
              })();
            </script>`
        );
      }
    }
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './client/src'),
      '@shared': resolve(__dirname, './shared'),
      '@assets': resolve(__dirname, './client/src/assets'),
    }
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.error', 'console.warn'],
      },
      mangle: {
        toplevel: true,
        properties: {
          regex: /^_/
        }
      },
      output: {
        comments: false
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'ui': ['@radix-ui/react-dialog', '@radix-ui/react-button'],
          'utils': ['clsx', 'tailwind-merge']
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    sourcemap: false,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    '__DEV__': false
  }
});
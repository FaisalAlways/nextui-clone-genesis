
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Search, Book, Code, Palette, Zap, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const sidebarSections = [
  {
    title: "Getting Started",
    items: [
      { name: "Introduction", href: "#introduction" },
      { name: "Installation", href: "#installation" },
      { name: "Setup", href: "#setup" },
      { name: "Theme", href: "#theme" }
    ]
  },
  {
    title: "Components",
    items: [
      { name: "Button", href: "#button" },
      { name: "Input", href: "#input" },
      { name: "Card", href: "#card" },
      { name: "Modal", href: "#modal" },
      { name: "Table", href: "#table" }
    ]
  },
  {
    title: "Customization",
    items: [
      { name: "Colors", href: "#colors" },
      { name: "Typography", href: "#typography" },
      { name: "Spacing", href: "#spacing" },
      { name: "Breakpoints", href: "#breakpoints" }
    ]
  }
];

const Docs = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search docs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <nav className="space-y-6">
                {sidebarSections.map((section) => (
                  <div key={section.title}>
                    <h3 className="font-semibold text-gray-900 mb-3">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item.name}>
                          <button
                            onClick={() => setActiveSection(item.href.slice(1))}
                            className={`text-sm w-full text-left px-3 py-2 rounded-md transition-colors ${
                              activeSection === item.href.slice(1)
                                ? "bg-blue-100 text-blue-700"
                                : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                            }`}
                          >
                            {item.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              {activeSection === "introduction" && (
                <div className="space-y-6">
                  <div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Introduction</h1>
                    <p className="text-xl text-gray-600 mb-6">
                      NextUI is a modern React UI library that makes it easy to build beautiful and accessible user interfaces.
                    </p>
                    <Badge className="mb-6">v2.4.0</Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                    <div className="text-center p-6 border border-gray-200 rounded-lg">
                      <Zap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Fast</h3>
                      <p className="text-sm text-gray-600">Built for performance with minimal bundle size</p>
                    </div>
                    <div className="text-center p-6 border border-gray-200 rounded-lg">
                      <Palette className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Customizable</h3>
                      <p className="text-sm text-gray-600">Fully customizable with CSS-in-JS</p>
                    </div>
                    <div className="text-center p-6 border border-gray-200 rounded-lg">
                      <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Accessible</h3>
                      <p className="text-sm text-gray-600">WAI-ARIA compliant components</p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Features</h2>
                    <ul className="space-y-2 text-gray-700">
                      <li>• TypeScript support out of the box</li>
                      <li>• Dark mode support</li>
                      <li>• Responsive design</li>
                      <li>• Customizable theme system</li>
                      <li>• Tree-shaking for optimal bundle size</li>
                      <li>• Extensive component library</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeSection === "installation" && (
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">Installation</h1>
                  
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Package Manager</h2>
                    <div className="bg-gray-900 rounded-lg p-4 mb-4">
                      <code className="text-green-400">npm install @nextui-org/react framer-motion</code>
                    </div>
                    <p className="text-gray-600 mb-6">
                      NextUI requires React 18 or later and framer-motion for animations.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">CDN</h2>
                    <div className="bg-gray-900 rounded-lg p-4 mb-4">
                      <code className="text-green-400 text-sm">
                        {`<script src="https://unpkg.com/@nextui-org/react@latest/dist/index.js"></script>`}
                      </code>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
                    <ul className="space-y-2 text-gray-700">
                      <li>• React 18.0.0 or later</li>
                      <li>• TypeScript 4.9.0 or later (optional)</li>
                      <li>• framer-motion 6.0.0 or later</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeSection === "setup" && (
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">Setup</h1>
                  
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Provider Setup</h2>
                    <p className="text-gray-600 mb-4">
                      Wrap your application with the NextUIProvider:
                    </p>
                    <div className="bg-gray-900 rounded-lg p-4 mb-4">
                      <pre className="text-green-400 text-sm">
{`import { NextUIProvider } from '@nextui-org/react'

function App() {
  return (
    <NextUIProvider>
      <YourApplication />
    </NextUIProvider>
  )
}`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Import Components</h2>
                    <div className="bg-gray-900 rounded-lg p-4 mb-4">
                      <pre className="text-green-400 text-sm">
{`import { Button, Input, Card } from '@nextui-org/react'

export default function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter text..." />
      <Button color="primary">Submit</Button>
    </Card>
  )
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "button" && (
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">Button</h1>
                  
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
                    <div className="border border-gray-200 rounded-lg p-6 mb-4">
                      <div className="flex gap-4 mb-4">
                        <Button>Default</Button>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Primary</Button>
                        <Button variant="outline">Secondary</Button>
                      </div>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <pre className="text-green-400 text-sm">
{`<Button>Default</Button>
<Button color="primary">Primary</Button>
<Button variant="bordered">Secondary</Button>`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
                    <div className="border border-gray-200 rounded-lg p-6 mb-4">
                      <div className="flex items-center gap-4 mb-4">
                        <Button size="sm">Small</Button>
                        <Button>Medium</Button>
                        <Button size="lg">Large</Button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Props</h2>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border border-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-2 text-left">Prop</th>
                            <th className="px-4 py-2 text-left">Type</th>
                            <th className="px-4 py-2 text-left">Default</th>
                            <th className="px-4 py-2 text-left">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t">
                            <td className="px-4 py-2">size</td>
                            <td className="px-4 py-2">sm | md | lg</td>
                            <td className="px-4 py-2">md</td>
                            <td className="px-4 py-2">The size of the button</td>
                          </tr>
                          <tr className="border-t">
                            <td className="px-4 py-2">color</td>
                            <td className="px-4 py-2">primary | secondary | success</td>
                            <td className="px-4 py-2">default</td>
                            <td className="px-4 py-2">The color theme</td>
                          </tr>
                          <tr className="border-t">
                            <td className="px-4 py-2">disabled</td>
                            <td className="px-4 py-2">boolean</td>
                            <td className="px-4 py-2">false</td>
                            <td className="px-4 py-2">Whether the button is disabled</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* Add more sections as needed */}
              {!["introduction", "installation", "setup", "button"].includes(activeSection) && (
                <div className="space-y-6">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
                  </h1>
                  <p className="text-gray-600">
                    Documentation for {activeSection} is coming soon. Stay tuned for updates!
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center">
                      <Book className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="text-blue-800">This section is under development</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Docs;

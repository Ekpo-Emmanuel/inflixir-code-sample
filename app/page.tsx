"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Frame, HelpCircle, Plus, Heart, ImageIcon, Menu, MessageCircle, Search, Settings, Video } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Sidebar */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent side="left" className="w-[240px] sm:w-[300px]">
          <nav className="flex flex-col gap-4">
            <Link href="#" className="flex items-center gap-2 text-xl font-semibold text-primary">
              <Frame className="h-6 w-6" />
              inflxr
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg bg-purple-700/10 px-3 py-2 text-primary"
            >
              <svg
                className=" h-4 w-4"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect height="18" rx="2" width="18" x="3" y="3" />
                <line x1="9" x2="15" y1="9" y2="9" />
                <line x1="9" x2="15" y1="15" y2="15" />
              </svg>
              Dashboard
            </Link>
            <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted">
              <svg
                className=" h-4 w-4"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" x2="22" y1="12" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              Discover Influencer
            </Link>
            <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted">
              <svg
                className=" h-4 w-4"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.5 9.4 7.55 4.24" />
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
              Campaign
            </Link>
            <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted">
              <svg
                className=" h-4 w-4"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect height="16" rx="2" width="20" x="2" y="4" />
                <path d="M7 15h0M2 9.5h20" />
              </svg>
              Payment
            </Link>
            <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted">
              <MessageCircle className="h-4 w-4" />
              Message
              <Badge className="ml-auto" variant="secondary">
                3
              </Badge>
            </Link>
          </nav>
          <Separator className="my-4" />
          <nav className="flex flex-col gap-4">
            <div className="text-xs font-semibold text-muted-foreground">SUPPORT</div>
            <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted">
              <Settings className="h-4 w-4" />
              Setting
            </Link>
            <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted">
              <Heart className="h-4 w-4" />
              Wishlist
            </Link>
            <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted">
              <HelpCircle className="h-4 w-4" />
              Help Center
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-56 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r bg-background px-6">
          <div className="flex h-16 shrink-0 items-center">
            <Link href="#" className="flex items-center gap-2 text-xl font-semibold text-primary">
              <Frame className="h-6 w-6" />
              inflxr
            </Link>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  <li>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg bg-purple-700/10 px-3 py-2 text-primary"
                    >
                      <svg
                        className=" h-4 w-4"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect height="18" rx="2" width="18" x="3" y="3" />
                        <line x1="9" x2="15" y1="9" y2="9" />
                        <line x1="9" x2="15" y1="15" y2="15" />
                      </svg>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted"
                    >
                      <svg
                        className=" h-4 w-4"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" x2="22" y1="12" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                      Discover Influencer
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted"
                    >
                      <svg
                        className=" h-4 w-4"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.5 9.4 7.55 4.24" />
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      </svg>
                      Campaign
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted"
                    >
                      <svg
                        className=" h-4 w-4"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect height="16" rx="2" width="20" x="2" y="4" />
                        <path d="M7 15h0M2 9.5h20" />
                      </svg>
                      Payment
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Message
                      <Badge className="ml-auto rounded-full bg-red-600 text-white" variant="secondary">
                        3
                      </Badge>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <div className="text-xs font-semibold leading-6 text-muted-foreground">Support</div>
                <ul role="list" className="-mx-2 mt-2 space-y-1">
                  <li>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted"
                    >
                      <Settings className="h-4 w-4" />
                      Setting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted"
                    >
                      <Heart className="h-4 w-4" />
                      Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted"
                    >
                      <HelpCircle className="h-4 w-4" />
                      Help Center
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* Main Content */}
      <div className="lg:pl-56">
        {/* Header */}
        <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background px-4 shadow-sm sm:px-6 lg:px-8">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSidebarOpen(true)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open sidebar</span>
          </Button>
          <div className="flex items-center gap-2 font-semibold">
            <div className=" border rounded-full overflow-hidden">
              <img
                alt="Adidas logo"
                className="rounded"
                height="32"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGLJC-hmcfN9t5pvZRmFrTBktTfr4lpdWKTA&s"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width="32"
              />
            </div>
            <div className="flex flex-col"> 
              <p>Adidas</p>
              <span className="text-muted-foreground font-normal text-xs">Brand handed</span>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                className="w-[300px] pl-8"
                placeholder="Search or type a command here..."
                type="search"
              />
            </div>
            <Button size="icon" variant="ghost">
              <Bell className="h-4 w-4" />
              <span className="sr-only">View notifications</span>
            </Button>
            <Button className="rounded-full" size="icon" variant="ghost">
              <Image
                alt="Avatar"
                className="rounded-full"
                height="32"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width="32"
              />
              <span className="sr-only">View profile</span>
            </Button>
          </div>
        </header>
        {/* Campaign Content */}
        <main className="p-4 sm:p-6 lg:p-8 bg-gray-100">
          <div className="mb-4">
            <h1 className="text-2xl font-semibold">Dashboard - Campaign Overview</h1>
          </div>
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              <Button variant="ghost">
                <svg
                  className=" h-4 w-4"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>
                <span className="sr-only">Go back</span>
              </Button>
              <div className="flex flex-col gap-2">
                <h2 className="text-lg font-semibold">Summer Campaign With Nike</h2>
                <div className="flex items-center gap-2">
                  <Badge>Active</Badge>
                  <span className="text-sm text-muted-foreground">July 10, 2024 to August 10, 2024</span>
                </div>
              </div>
            </div>
            <Tabs className="mt-4" defaultValue="overview">
              <TabsList className="grid w-fit border-b grid-cols-2 lg:grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="content">Campaign Content</TabsTrigger>
                <TabsTrigger value="payment">Payment</TabsTrigger>
                <TabsTrigger value="setting">Setting</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card className="p-4">
                    <div className="text-2xl font-bold">6</div>
                    <div className="text-sm text-muted-foreground">Total Influencer</div>
                  </Card>
                  <Card className="p-4">
                    <div className="text-2xl font-bold">6</div>
                    <div className="text-sm text-muted-foreground">Invited Influencer</div>
                  </Card>
                  <Card className="p-4">
                    <div className="text-2xl font-bold">6</div>
                    <div className="text-sm text-muted-foreground">Accepted Influencer</div>
                  </Card>
                  <Card className="p-4">
                    <div className="text-2xl font-bold">0</div>
                    <div className="text-sm text-muted-foreground">Rejected Influencer</div>
                  </Card>
                </div>
                <div className="mt-6">
                  <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold">Influencers</h3>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                      <Input placeholder="Search influencer here..." className="w-full sm:w-auto" />
                      <Button variant="outline" className="w-full sm:w-auto">
                        Add New Influencer
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <Card key={i} className="p-4">
                        <div className="flex items-center justify-between gap-5">
                          <div className="flex items-center gap-4">
                            <img
                              alt="Influencer avatar"
                              className="rounded-full"
                              height="48"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbp0Z9PUTbap1HrZv3pDNRG7tCdTPRHtOsNQ&s"
                              style={{
                                aspectRatio: "48/48",
                                objectFit: "cover",
                              }}
                              width="48"
                            />
                            <div>
                              <div className="font-semibold">Harvey Specter</div>
                              <div className="text-sm text-muted-foreground">@harvey_specter</div>
                            </div>
                          </div>
                            <div>
                              <div className="text-sm font-medium">Task</div>
                              <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary">
                                  <ImageIcon className="mr-1 h-3 w-3" />
                                  2 Photo Post
                                </Badge>
                                <Badge variant="secondary">
                                  <Video className="mr-1 h-3 w-3" />
                                  1 Reel Video Post
                                </Badge>
                              </div>
                            </div>
                            <div>
                              <div className="text-sm font-medium">Influencer Status</div>
                              <Badge className="bg-green-100 text-green-700">Active Influencer</Badge>
                            </div>
                            <div>
                              <div className="text-sm font-medium">Activities</div>
                              <div className="text-sm text-muted-foreground">Drafting Content</div>
                            </div>
                            <div>
                              <div className="text-sm font-medium">Time</div>
                              <div className="text-sm text-muted-foreground">26 minutes ago</div>
                            </div>
                            <Button variant="outline" className="bg-purple-400">View Details</Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
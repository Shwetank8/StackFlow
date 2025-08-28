'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { MessageSquare, Users, Zap, Shield, Video, Search } from "lucide-react"
import Link from "next/link"

export default  function LandingPage() {



  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Layered background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-slate-950/50 to-slate-900/30"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-blue-500/10"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-primary/3 to-slate-800/20"></div>

      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/8 to-blue-500/6 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-blue-500/5 to-primary/7 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-br from-primary/6 to-slate-600/4 rounded-full blur-2xl"></div>
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-gradient-to-bl from-blue-400/4 to-primary/5 rounded-full blur-3xl"></div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-border/50 backdrop-blur-sm bg-gradient-to-r from-background/90 to-background/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-foreground">SlackFlow</span>
              </div>

              {/* When user is signed in → show UserButton */}
              <SignedIn>
                <div className="flex items-center gap-4 ml-20">
                  <Button
                    variant="ghost"
                    className="text-muted-foreground hover:text-foreground cursor-pointer"
                  >
                    <Link href='/projects' >Projects</Link>
                  </Button>
                  <UserButton />
                </div>
              </SignedIn>

               {/* When user is signed out → show Sign In / Sign Up */}
              <SignedOut>
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" className="text-muted-foreground hover:text-foreground cursor-pointer">
                    <Link href='/sign-in' >Sign In</Link>
                  </Button>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer">
                    <Link href='/sign-up' >Sign Up</Link>
                  </Button>
                </div>
              </SignedOut>
              
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Team Communication
              <span className="text-primary block">Reimagined</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Connect your team with powerful messaging, seamless file sharing, and integrated workflows. Experience
              communication that actually works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 cursor-pointer">
                <Link href='/sign-in' >Sign In</Link>
              </Button>
              <Button
                id="#features"
                size="lg"
                variant="outline"
                className="border-border hover:bg-muted bg-transparent cursor-pointer"
              >
                <a href="#features">Features</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Everything your team needs</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Powerful features designed to keep your team connected and productive
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:from-card/80 hover:to-card/60 transition-all duration-300">
                <CardContent className="p-6">
                  <MessageSquare className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">Instant Messaging</h3>
                  <p className="text-muted-foreground">
                    Real-time messaging with threads, reactions, and rich formatting to keep conversations organized.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:from-card/80 hover:to-card/60 transition-all duration-300">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">Team Channels</h3>
                  <p className="text-muted-foreground">
                    Organize conversations by project, team, or topic with public and private channels.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:from-card/80 hover:to-card/60 transition-all duration-300">
                <CardContent className="p-6">
                  <Video className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">Video Calls</h3>
                  <p className="text-muted-foreground">
                    High-quality video calls and screen sharing built right into your workspace.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:from-card/80 hover:to-card/60 transition-all duration-300">
                <CardContent className="p-6">
                  <Search className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">Smart Search</h3>
                  <p className="text-muted-foreground">
                    Find any message, file, or conversation instantly with powerful search capabilities.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:from-card/80 hover:to-card/60 transition-all duration-300">
                <CardContent className="p-6">
                  <Zap className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">Integrations</h3>
                  <p className="text-muted-foreground">
                    Connect with your favorite tools and automate workflows to boost productivity.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:from-card/80 hover:to-card/60 transition-all duration-300">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">Enterprise Security</h3>
                  <p className="text-muted-foreground">
                    Bank-level security with end-to-end encryption and compliance certifications.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to transform your team communication?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of teams already using SlackFlow to work better together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 cursor-pointer">
                Get Started
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/50 py-12 px-4 sm:px-6 lg:px-8 backdrop-blur-sm bg-gradient-to-r from-background/60 to-background/40">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <MessageSquare className="h-6 w-6 text-primary" />
                <span className="text-lg font-semibold text-foreground">SlackFlow</span>
              </div>
              <div className="flex space-x-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Support
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
              © 2024 SlackFlow. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

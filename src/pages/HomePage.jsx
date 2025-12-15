import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <Card className="w-[450px]">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Welcome to the AI Agent Chat</CardTitle>
          <CardDescription>Create your own team of AI agents and start chatting.</CardDescription>
        </CardHeader>
        <CardContent>
          <Link to="/setup" className='w-full'>
            <Button data-testid="get-started-button" className="w-full">
              Get Started
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;

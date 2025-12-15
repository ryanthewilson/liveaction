import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const ProfileCard = ({ agent }) => {
  return (
    <Card className="w-[450px]">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={agent.imageUrl} alt={agent.name} />
          <AvatarFallback>{agent.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-2xl font-bold">{agent.name}</CardTitle>
          <CardDescription>{agent.backstory}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Interests</h3>
          <ul className="list-disc list-inside">
            {agent.interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Motives</h3>
          <ul className="list-disc list-inside">
            {agent.motives.map((motive, index) => (
              <li key={index}>{motive}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;

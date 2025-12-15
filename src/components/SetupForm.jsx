import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const SetupForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useLocalStorage('setupData', {
    userName: '',
    groupName: '',
    groupLeader: '',
    groupPurpose: '',
    agents: [
      { name: '', backstory: '' },
      { name: '', backstory: '' },
      { name: '', backstory: '' },
      { name: '', backstory: '' },
      { name: '', backstory: '' },
    ],
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAgentChange = (index, e) => {
    const { name, value } = e.target;
    const newAgents = [...formData.agents];
    newAgents[index][name] = value;
    setFormData({ ...formData, agents: newAgents });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/chat');
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle>User and Group Setup</CardTitle>
              <CardDescription>Tell us a bit about yourself and your group.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="userName">Your Name</Label>
                <Input id="userName" name="userName" value={formData.userName} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="groupName">Group Name</Label>
                <Input id="groupName" name="groupName" value={formData.groupName} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="groupLeader">Group Leader</Label>
                <Input id="groupLeader" name="groupLeader" value={formData.groupLeader} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="groupPurpose">Group Purpose</Label>
                <Textarea id="groupPurpose" name="groupPurpose" value={formData.groupPurpose} onChange={handleChange} />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={nextStep}>Next</Button>
            </CardFooter>
          </Card>
        );
      case 2:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Agent Setup</CardTitle>
              <CardDescription>Define the personalities of your AI agents.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {formData.agents.map((agent, index) => (
                <div key={index} className="p-4 border rounded-lg space-y-2">
                  <h3 className="text-lg font-semibold">Agent {index + 1}</h3>
                  <div className="space-y-2">
                    <Label htmlFor={`agent-name-${index}`}>Name</Label>
                    <Input id={`agent-name-${index}`} name="name" value={agent.name} onChange={(e) => handleAgentChange(index, e)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`agent-backstory-${index}`}>Backstory</Label>
                    <Textarea id={`agent-backstory-${index}`} name="backstory" value={agent.backstory} onChange={(e) => handleAgentChange(index, e)} />
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={prevStep}>Back</Button>
              <Button onClick={handleSubmit}>Finish</Button>
            </CardFooter>
          </Card>
        );
      default:
        return null;
    }
  };

  return <form onSubmit={handleSubmit}>{renderStep()}</form>;
};

export default SetupForm;

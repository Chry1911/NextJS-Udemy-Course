"use client"

import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { z } from 'zod';

const schema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters long'),
  email: z.string().email('Invalid email address'),
});

export default function Home() {
  const [formData, setFormData] = useState({ username: '', email: '' });
  const [errors, setErrors] = useState<{ username?: string; email?: string }>({});

  const handleSubmit = () => {
    try {
      schema.parse(formData); // Validate data
      setErrors({}); // Clear errors if validation is successful
      console.log('Form data is valid:', formData);
    } catch (err) {
      if (err instanceof z.ZodError) {
        const validationErrors: Record<string, string> = {};
        err.errors.forEach((issue) => {
          validationErrors[issue.path[0]] = issue.message;
        });
        setErrors(validationErrors); // Set validation errors
      }
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="username">Username</label>
        <InputText
          id="username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          className={errors.username ? 'p-invalid' : ''}
        />
        {errors.username && <small className="p-error">{errors.username}</small>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <InputText
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={errors.email ? 'p-invalid' : ''}
        />
        {errors.email && <small className="p-error">{errors.email}</small>}
      </div>

      <Button label="Submit" onClick={handleSubmit} />
    </div>
  );
}

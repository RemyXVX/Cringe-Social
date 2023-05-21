'use client';

import React, { useState, useEffect } from 'react';
import { PrismaClient } from '@prisma/client';

interface FormData {
  id: string;
  name: string;
  email: string;
  password: string;
  status: string;
  pictures: string[];
}

const Register: React.FC = () => {
  const [register, setRegister] = useState<FormData[]>([]);
  const [form, setForm] = useState<FormData>({
    id: '',
    name: '',
    email: '',
    password: '',
    status: '',
    pictures: [],
  });
  const isEmailMatch = form.email === form.email;
  const isPasswordStrong = form.password.length >= 8;

  const refreshData = () => {
    setForm({
      id: '',
      name: '',
      email: '',
      password: '',
      status: '',
      pictures: [],
    });
  };

  const create = async (data: FormData) => {
    try {
      await fetch('http://localhost:3000/api/create', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      if (data.id) {
        await deleteRegister(data.id);
      }

      refreshData();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRegister = async (id: string) => {
    try {
      await fetch(`http://localhost:3000/api/dashboard/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'DELETE',
      });

      refreshData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (data: FormData) => {
    create(data).catch(console.log);
  };

  useEffect(() => {
    const fetchData = async () => {
      const prisma = new PrismaClient();
      const registeredUsers = await prisma.user.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          password: true,
          status: true,
          pictures: true,
        },
      });

      const formattedUsers: FormData[] = registeredUsers.map((user) => ({
        id: user.id.toString(),
        name: user.name,
        email: user.email,
        password: user.password,
        status: user.status || '',
        pictures: user.pictures,
      }));

      setRegister(formattedUsers);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-2xl mt-4">dashboard</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(form);
        }}
        className="w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch"
      >
        <input
          type="text"
          placeholder="name"
          className="input-field"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="email"
          value={form.email}
          className="input-field"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {!isEmailMatch && <p className="error-message">Emails do not match</p>}
        <input
          type="email"
          placeholder="confirm email"
          className="input-field"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {!isEmailMatch && <p className="error-message">Emails do not match</p>}

        <input
          type="password"
          placeholder="password"
          className="input-field"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        {!isPasswordStrong && (
          <p className="error-message">Password must be at least 8 characters long</p>
        )}
        <input
          type="password"
          placeholder="confirm password"
          className="input-field"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        {!isPasswordStrong && (
          <p className="error-message">Password must be at least 8 characters long</p>
        )}

        <button
          type="submit"
          className={`submit-button ${(!isEmailMatch || !isPasswordStrong) && 'disabled'}`}
          disabled={!isEmailMatch || !isPasswordStrong}
        >
          Register
        </button>
      </form>
      <div className="w-auto min-w-[25%] max-w-min mt-20 mx-auto space-y-6 flex flex-col items-stretch">
        <ul>
          {register.map((registration) => (
            <li key={registration.id} className="border-b border-gray-600 p-2">
              <div className="flex justify-between">
                <div className="flex-1">
                  <h3 className="font-bold">{registration.name}</h3>
                  <p className="text-sm">{registration.email}</p>
                </div>
                <button
                  onClick={() =>
                    setForm({ ...registration, password: '', pictures: [], status: registration.status || '' })
                  }
                  className="bg-blue-500 mr-3 px-3 text-white rounded"
                >
                  Update
                </button>
                <button
                  onClick={() => deleteRegister(registration.id)}
                  className="bg-red-500 px-3 text-white rounded"
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Register;

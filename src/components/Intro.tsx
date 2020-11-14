import React, { FC, FormEvent, useState } from 'react';

import Input from './Input';

interface IntroProps {
  onSearch: (value: string) => void
}

const Intro: FC<IntroProps> = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    onSearch(search);
    setSearch('');
  }

  return(
    <section className="hero is-medium is-dark has-text-centered is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-uppercase mb-6">Best free stock photos in one place</h1>
          <form onSubmit={submitHandler} className="form">
            <Input value={search} onChange={(e) => setSearch(e.currentTarget.value)} placeholder="Search..." />
            <button className="button is-large is-danger ml-4">Search</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Intro;
import React, { useState } from 'react';

import { PageLink } from 'common/Anchor';
import Dialog from 'common/Dialog';

import { Homepage } from './styled';

const Home = () => {
  const [dialog, setDialog] = useState(false);

  return (
    <Homepage>
      <Dialog isOpen={dialog} onClose={() => setDialog(false)} />

      <button onClick={() => setDialog(true)}>
        open dialog
      </button>

      <PageLink to="/about">
        About
      </PageLink>
    </Homepage>
  );
}

export default Home;

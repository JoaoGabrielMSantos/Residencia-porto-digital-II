import React from 'react';

const Header = ({ title, subtitle, children }) => {
  return (
    <header className="page-header" style={subtitle ? { alignItems: 'flex-start' } : {}}>
      <div>
        <h1>{title}</h1>
        {subtitle && <p style={{ marginTop: '5px', color: '#666' }}>{subtitle}</p>}
      </div>
      {children && <div className="filter-buttons">{children}</div>}
    </header>
  );
};

export default Header;

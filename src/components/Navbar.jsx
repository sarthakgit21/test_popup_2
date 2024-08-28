

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>MyLogo</div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>Home</li>
        <li style={styles.navItem}>About</li>
        <li style={styles.navItem}>Services</li>
        <li style={styles.navItem}>Contact</li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    fontSize: '1.5rem',
  },
  navLinks: {
    listStyleType: 'none',
    display: 'flex',
    gap: '1rem',
  },
  navItem: {
    cursor: 'pointer',
  },
};

export default Navbar;

import Footer from "./components/Footer";
import MainContent from "./components/template/MainContent";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div style={styles.app}>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
};

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
};

export default App;

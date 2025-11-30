import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import MainContent from './components/layout/MainContent/MainContent';
import StudyDashboard from './components/dashboard/StudyDashboard/StudyDashboard';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <MainContent>
        <StudyDashboard />
      </MainContent>
      <Footer />
    </div>
  );
}

export default App;




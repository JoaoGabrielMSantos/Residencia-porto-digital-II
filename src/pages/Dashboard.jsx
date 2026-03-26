import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Header from '../components/Header';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Dashboard = () => {
  const chartData = {
    labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
    datasets: [
      {
        label: 'Peças Produzidas',
        data: [120, 190, 150, 220, 180, 250],
        borderColor: '#4caf50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <Header title="Dashboard">
        <button className="filter-btn active">Por dia</button>
        <button className="filter-btn">Por semana</button>
        <button className="filter-btn">Por mês</button>
      </Header>

      <section className="cards-grid">
        <div className="card">
          <h3>Produção Hoje</h3>
          <p className="big">1.964 peças</p>
        </div>
        <div className="card">
          <h3>Máquinas Ativas</h3>
          <p className="big">4/6 máquinas</p>
        </div>
        <div className="card">
          <h3>Eficiência Média</h3>
          <p className="big">81%</p>
        </div>
        <div className="card">
          <h3>Metas do Dia</h3>
          <p className="big">82%</p>
        </div>
      </section>

      <section className="panel">
        <div className="panel-inner">
          <h2>Produção ao longo do dia</h2>
          <span className="label">Peças produzidas por hora</span>
          
          <section className="grafico">
            <div className="chart-container" style={{ position: 'relative', height: '300px', width: '100%' }}>
              <Line data={chartData} options={chartOptions} />
            </div>
          </section>
        </div>

        <section className="monitoramento">
          <h2>Monitoramento de Máquinas</h2>
          <div className="machines-grid">
            {/* Máquina 1 */}
            <div className="machine-card producing">
              <div className="header">
                <h3>Máquina 1</h3>
                <span className="status producing">✅ Produzindo</span>
              </div>
              <div className="info-line">
                <span className="label">Produção</span>
                <span className="value">342/400 peças</span>
              </div>
              <div className="progress-bar"><div className="progress green" style={{ width: '85%' }}></div></div>
              <div className="info-line">
                <span className="label">Eficiência</span>
                <span className="value">87%</span>
              </div>
            </div>

            {/* Máquina 2 */}
            <div className="machine-card producing">
              <div className="header">
                <h3>Máquina 2</h3>
                <span className="status producing">✅ Produzindo</span>
              </div>
              <div className="info-line">
                <span className="label">Produção</span>
                <span className="value">389/400 peças</span>
              </div>
              <div className="progress-bar"><div className="progress green" style={{ width: '97%' }}></div></div>
              <div className="info-line">
                <span className="label">Eficiência</span>
                <span className="value">95%</span>
              </div>
            </div>

            {/* Máquina 3 */}
            <div className="machine-card error">
              <div className="header">
                <h3>Máquina 3</h3>
                <span className="status error">❌ Erro</span>
              </div>
              <div className="info-line">
                <span className="label">Produção</span>
                <span className="value">178/400 peças</span>
              </div>
              <div className="progress-bar"><div className="progress red" style={{ width: '45%' }}></div></div>
              <div className="info-line">
                <span className="label">Eficiência</span>
                <span className="value">45%</span>
              </div>
            </div>
            
            {/* Máquina 4 */}
            <div className="machine-card paused">
              <div className="header">
                <h3>Máquina 4</h3>
                <span className="status paused">⏸️ Pausado</span>
              </div>
              <div className="info-line">
                <span className="label">Produção</span>
                <span className="value">256/400 peças</span>
              </div>
              <div className="progress-bar"><div className="progress orange" style={{ width: '64%' }}></div></div>
              <div className="info-line">
                <span className="label">Eficiência</span>
                <span className="value">64%</span>
              </div>
            </div>

          </div>
        </section>
      </section>
    </>
  );
};

export default Dashboard;

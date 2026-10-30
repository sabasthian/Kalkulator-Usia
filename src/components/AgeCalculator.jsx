import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = (e) => {
    e.preventDefault();
    if (!birthDate) return;

    const sekarang = new Date();
    const birth = new Date(birthDate);

    if (birth > sekarang) {
      setAge(null);
      alert("Tanggal lahir tidak boleh di masa depan!");
      return;
    }

    let years = sekarang.getFullYear() - birth.getFullYear();
    let months = sekarang.getMonth() - birth.getMonth();
    let days = sekarang.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const previousMonth = new Date(
        sekarang.getFullYear(),
        sekarang.getMonth(),
        0
      ).getDate();
      days += previousMonth;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <div className="age-wrapper">
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>
      <div className="glow glow-3"></div>

      <div className="age-card">
        <div className="age-card-header">
          <span className="badge-emoji">🎂</span>
          <h2>Kalkulator Usia</h2>
          <p className="subtitle">Temukan berapa lama kamu sudah hidup di dunia ini</p>
        </div>

        <form onSubmit={calculateAge}>
          <div className="mb-3">
            <label htmlFor="birthdate" className="form-label">
              Tanggal lahir kamu
            </label>
            <input
              type="date"
              className="form-control custom-input"
              id="birthdate"
              value={birthDate}
              max={new Date().toISOString().split("T")[0]}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-hitung w-100">
            ✨ Hitung Usia
          </button>
        </form>

        {age && (
          <div className="result-box">
            <p className="result-label">Usia kamu</p>
            <div className="result-grid">
              <div className="result-item">
                <span className="result-number">{age.years}</span>
                <span className="result-unit">Tahun</span>
              </div>
              <div className="result-divider"></div>
              <div className="result-item">
                <span className="result-number">{age.months}</span>
                <span className="result-unit">Bulan</span>
              </div>
              <div className="result-divider"></div>
              <div className="result-item">
                <span className="result-number">{age.days}</span>
                <span className="result-unit">Hari</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AgeCalculator;

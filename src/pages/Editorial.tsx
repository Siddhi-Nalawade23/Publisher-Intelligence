function Editorial() {
  return (
    <div className="field-page">
      <div className="page-header">
        <div className="page-eyebrow">
          Bucket 4 of 4 · Editorial intelligence
        </div>
        <div className="page-title">What's actually read </div>
        <div className="page-sub">
          Content in use, at chapter and page level, set against what the
          syllabus claims is assigned. This is the bucket that gets closest to
          real time — and the one where the data is furthest ahead of the
          demand.
        </div>
      </div>

      <div className="kpi-row">
        <div className="kpi">
          <div className="kpi-label">Chapters opened by &gt;50%</div>
          <div className="kpi-value">8 / 16</div>
          <div className="kpi-delta">Network median: 11 / 16</div>
        </div>
        <div className="kpi">
          <div className="kpi-label">Median session</div>
          <div className="kpi-value">14 min</div>
          <div className="kpi-delta">Peaks before assessment</div>
        </div>
        <div className="kpi">
          <div className="kpi-label">Cost per session</div>
          <div className="kpi-value">$0.42</div>
          <div className="kpi-delta down">Network median: $0.29</div>
        </div>
        <div className="kpi alert">
          <div className="kpi-label">Assigned but unread</div>
          <div className="kpi-value">4 ch</div>
          <div className="kpi-delta">On the syllabus, barely opened</div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div>
            <div className="card-title">
              Engagement by chapter — Principles of Microeconomics, 9e
            </div>
            <div className="card-meta">
              Share of enrolled students who opened each chapter, across all
              adopting sections. Term to date.
            </div>
          </div>
          <span className="fresh near">Updated daily</span>
        </div>
      </div>
    </div>
  );
}
export default Editorial;

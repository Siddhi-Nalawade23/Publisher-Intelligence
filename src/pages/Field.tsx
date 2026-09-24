import "./Field.css"
import { attritionData } from "../data/attritionData";
import { useState } from "react";

function Field() {
   const [sortBy, setSortBy] = useState("enrollment");
   return (
      <div className="field-page">
         <div>
            <div className="page-header">
               <div className="page-eyebrow">Bucket 1 of 4 · Field intelligence</div>
               <div className="page-title">What's moving this term</div>
               <div className="page-sub">The live competitive picture for the people carrying a bag: which adoptions are being won, which are slipping, and — the part we can't answer today — what actually happened to the ones that disappeared.</div>
            </div>
         </div>
         <div className="kpi-row">
            <div className="kpi">
               <div className="kpi-label">Active adoptions</div>
               <div className="kpi-value">2,847</div>
               <div className="kpi-delta up">↑ 4% vs last fall</div>
            </div>
            <div className="kpi">
               <div className="kpi-label">Won this term</div>
               <div className="kpi-value">128</div>
               <div className="kpi-delta">Network average: 96</div>
            </div>
            <div className="kpi">
               <div className="kpi-label">Lost this term</div>
               <div className="kpi-value">91</div>
               <div className="kpi-delta down">↑ 11 vs last fall</div>
            </div>
            <div className="kpi alert">
               <div className="kpi-label">At risk</div>
               <div className="kpi-value">214</div>
               <div className="kpi-delta">Flagged on 1+ signals</div>
            </div>
         </div>

         <div className="card">
            <div className="card-header">
               <div>
                  <div className="card-title">What happened to my adoption?</div>
                  <div className="card-meta">Attribution for the 91 adoptions lost this term. Competing publishers are aggregated anonymously — no competitor names are surfaced.</div>
               </div>
               <span className="fresh lag">Updated weekly</span>
            </div>
            <div className="health-note warn">
               <span className="health-note-icon">⚠</span>
               <div>
                  <div>The amber slice is the gap we're trying to close.</div>
                  <div>Today a publisher who loses a course can't tell whether they were displaced by a
                     competing title, whether the course stopped running, or whether the department simply cut sections.
                     Those are three completely different conversations for a rep to have. Driving
                     <strong>unknown</strong>
                     toward zero is the single clearest opportunity in this bucket.
                  </div>
               </div>
            </div>
            <div className="legend" style={{ marginBottom: "12px" }}>
               <div className="leg">
                  <div className="leg-swatch" style={{ backgroundColor: "var(--paid)" }}></div>
                  Switched to a competing titles
               </div>
               <div className="leg"><div className="leg-swatch" style={{ background: "var(--cyan)" }}></div>Course no longer offered</div>
               <div className="leg">
                  <div className="leg-swatch" style={{ backgroundColor: "var(--you-risk)" }}></div>
                  Sections reduced
               </div>
               <div className="leg">
                  <div className="leg-swatch" style={{ background: "var(--oer)" }}></div>
                  Moved to Open/OER or low-cost
               </div>
               <div className="leg">
                  <div className="leg-swatch" style={{ background: "repeating-linear-gradient(135deg,#FCD34D 0px,#FCD34D 3px,#FDE68A 3px,#FDE68A 6px)" }}></div>
                  Unknown
               </div>
            </div>
            <div className="axis-row">
               <div className="row-spacer"></div>
               <div className="axis-track"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span></div>
               <div className="row-meta-spacer"></div>
            </div >
            <div className="chart-area">
               {attritionData.map((row) => (
                  <div className="chart-row" key={row.label}>
                     <div className="row-label">{row.label}</div>
                     <div className="bar-wrap">
                        <div className="bar-track">
                           {row.segments.map((seg) => (
                              <div
                                 key={seg.key}
                                 className={`seg ${seg.colorClass}`}
                                 style={{ width: `${seg.value}%` }}
                              >
                                 <span>{seg.value}%</span>
                              </div>
                           ))}
                        </div>
                     </div>
                    <div className="row-meta">
                        <span className="row-lost">{row.lost} lost</span>
                        <span className={`row-tag row-tag--${row.tagVariant}`}>{row.statusTag}</span>
                     </div>

                  </div>
               ))}
            </div>


         </div>

         <div className="card">
            <div className="card-header">
               <div>
                  <div className="card-title">At-risk watchlist</div>
                  <div className="card-meta">
                     Your adoptions carrying one or more risk signals, ranked by enrollment behind them. Course names are as the campus lists them.
                  </div>

               </div>
               <div className="controls">
                  <select
                     id="watchlist-sort"
                     name="watchlist-sort"
                     value={sortBy}
                     onChange={(e) => setSortBy(e.target.value)}
                  >
                     <option value="enrollment">Enrollment at risk</option>
                     <option value="severity">Signal severity</option>
                     <option value="institution">Institution</option>
                  </select>
               </div>
            </div>
            {/* Table of At RISK WATCHLIST */}
            <div className="RiskTable">
               <table className="fh-table">
                  <thead>
                     <tr>
                        <th>COURSE</th>
                        <th>INSTITUTION</th>
                        <th>SUBJECT</th>
                        <th>SECTION</th>
                        <th>ENROLLMENT</th>
                        <th>ENGAGEMENT VS.MNETWORK</th>
                        <th>SIGNAL</th>
                        <th>LAST ACTIVITY</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td className="course-name">ECON 201 — Principles of Microeconomics</td>
                        <td>Iowa State</td>
                        <td><span className="tag-pill subj-pill">Economics</span></td>
                        <td className="neg">7 → 5</td>
                        <td>1,240</td>
                        <td className="neg">−18%</td>
                        <td><span className="tag-pill risk-hi">Sections cut</span></td>
                        <td>2 days ago</td>
                     </tr>
                     <tr>
                        <td className="course-name">BIOL 1110 — Introductory Biology</td>
                        <td>UC Davis</td>
                        <td><span className="tag-pill subj-pill">Biology</span></td>
                        <td>12</td>
                        <td>2,010</td>
                        <td className="neg">−9%</td>
                        <td><span className="tag-pill risk-hi">Competing sample requested</span></td>
                        <td>6 days ago</td>
                     </tr>
                     <tr>
                        <td className="course-name">PSYC 100 — General Psychology</td>
                        <td>Ohio State</td>
                        <td><span className="tag-pill subj-pill">Psychology</span></td>
                        <td>18</td>
                        <td>3,450</td>
                        <td>−2%</td>
                        <td><span className="tag-pill risk-med">Title dropped from syllabus</span></td>
                        <td>11 days ago</td>
                     </tr>
                     <tr>
                        <td className="course-name">NURS 210 — Pharmacology for Nursing</td>
                        <td>Georgia State</td>
                        <td><span className="tag-pill subj-pill">Nursing</span></td>
                        <td>6</td>
                        <td>720</td>
                        <td>+4%</td>
                        <td><span className="tag-pill risk-med">Course coordinator changed</span></td>
                        <td>3 days ago</td>
                     </tr>
                     <tr>
                        <td className="course-name">ECON 202 — Principles of Macroeconomics</td>
                        <td>Arizona State</td>
                        <td><span className="tag-pill subj-pill">Economics</span></td>
                        <td>9</td>
                        <td>1,680</td>
                        <td className="neg">−22%</td>
                        <td><span className="tag-pill risk-lo">Low engagement only</span></td>
                        <td>Yesterday</td>
                     </tr>
                  </tbody>
               </table>

            </div>

         </div>
         <div className="asks-card">
            <div className="asks-label">
               QUESTIONS THIS BUCKET ANSWERS</div>
            <div className="asks">
               <div className="ask"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7" /></svg>Which adoptions do I defend in the next three weeks?</div>
               <div className="ask"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7" /></svg>Did I lose the course, or did the course lose sections?</div>
               <div className="ask"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7" /></svg>Where is my rep walking in blind this week?</div>
               <div className="ask"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7" /></svg>Which wins should the region be repeating?</div>
            </div>
         </div>
      </div>
   )
}
export default Field
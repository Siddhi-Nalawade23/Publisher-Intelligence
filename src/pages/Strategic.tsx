import "./Strategic.scss"
import * as Progress from "@radix-ui/react-progress";


function Strategic() {
    return (
        <div>
            <div className="container">
                <div className="page-header">
                    <div className="page-eyebrow">Bucket 2 of 4 · Strategic intelligence</div>
                    <div className="page-title">You are here </div>
                    <div className="page-sub">Where the market is moving and where this publisher sits in it. This bucket reports position and trend — it deliberately stops short of forecasting, which belongs with the publisher's own strategy function.</div>
                </div>
            </div>
            <div className="kpi-row-three">
                <div className="kpi">
                    <div className="kpi-label">Your total-access share</div>
                    <div className="kpi-value">34%</div>
                    <div className="kpi-delta down">Network average: 51%</div>
                </div>
                <div className="kpi">
                    <div className="kpi-label">Open/OER share of US syllabi</div>
                    <div className="kpi-value">2%</div>
                    <div className="kpi-delta">Flat over 3 years</div>
                </div>
                <div className="kpi">
                    <div className="kpi-label">VitalSource Value Collection</div>
                    <div className="kpi-value">9%</div>
                    <div className="kpi-delta up">↑ 2pts vs last year</div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <div>
                        <div className="card-title">Market model mix — your titles vs. the network</div>
                        <div className="card-meta">Share of adoptions by how the material reaches the student. The orange marker is the anonymised network average for each model.</div>
                    </div>
                    <span className="fresh term">Term-over-term</span>
                </div>
                <div className="chart-area">

                    <div className="chart-row">
                        <div className="row-label">Student choice</div>

                        <div className="bar-wrap">
                            <Progress.Root
                                className="bench-rail"
                                value={48}
                                aria-label="Student choice: You 48%"
                            >
                                <Progress.Indicator
                                    className="bench-fill"
                                    style={{ width: "48%" }}
                                />

                                <div
                                    className="bench-mark"
                                    style={{ left: "31%" }}
                                    aria-label="Network benchmark: 31%"
                                >
                                    <span>Net 31%</span>
                                </div>

                                <span className="bench-val">You 48%</span>
                            </Progress.Root>
                        </div>

                        <div className="row-meta">
                            <span className="trend down">↓ 6pts</span>
                            <span className="flag watch">Over-indexed</span>
                        </div>
                    </div>


                    <div className="chart-row">
                        <div className="row-label">Inclusive access</div>

                        <div className="bar-wrap">
                            <Progress.Root
                                className="bench-rail"
                                value={18}
                                aria-label="Inclusive access: You 18%"
                            >
                                <Progress.Indicator
                                    className="bench-fill"
                                    style={{ width: "18%" }}
                                />

                                <div
                                    className="bench-mark"
                                    style={{ left: "18%" }}
                                    aria-label="Network benchmark: 18%"
                                >
                                    <span>Net 18%</span>
                                </div>

                                <span className="bench-val">You 18%</span>
                            </Progress.Root>
                        </div>

                        <div className="row-meta">
                            <span className="trend flat">flat</span>
                            <span className="flag neutral">At network</span>
                        </div>
                    </div>


                    <div className="chart-row">
                        <div className="row-label">Total access</div>

                        <div className="bar-wrap">
                            <Progress.Root
                                className="bench-rail"
                                value={34}
                                aria-label="Total access: You 34%"
                            >
                                <Progress.Indicator
                                    className="bench-fill"
                                    style={{ width: "34%" }}
                                />

                                <div
                                    className="bench-mark"
                                    style={{ left: "51%" }}
                                    aria-label="Network benchmark: 51%"
                                >
                                    <span>Net 51%</span>
                                </div>

                                <span className="bench-val">You 34%</span>
                            </Progress.Root>
                        </div>

                        <div className="row-meta">
                            <span className="trend up">↑ 5pts</span>
                            <span className="flag gap">17pts behind</span>
                        </div>
                    </div>

                </div>
                <div className="disclosure">
                    Every metric in this bucket ships with a network benchmark beside it, so position is readable without a publisher having to guess. Benchmarks are aggregated across the full VitalSource network and never attributed to a named publisher or institution.
                </div>
            </div>
            <div className="split">
                <div className="card">
                    <div className="card-header">
                        <div>
                            <div className="card-title">Share of syllabi by material type</div>
                            <div className="card-meta">What faculty are actually listing, US network</div>
                        </div>
                    </div>
                    <div className="chart-area">
                        <div className="chart-row">
                            <div className="row-label">Commercial</div>
                            <div className="bar-wrap"><div className="bar-track"><div className="seg seg-you" style={{ width: "84%" }}><span>84%</span></div><div className="seg seg-none" style={{ width: "16%" }}></div></div></div>
                            <div className="row-meta"><span className="trend down">↓ 2pts</span></div>
                        </div>
                        <div className="chart-row">
                            <div className="row-label">Value Collection</div>
                            <div className="bar-wrap"><div className="bar-track"><div className="seg seg-slate" style={{ width: "9%" }}><span>9%</span></div><div className="seg seg-none" style={{ width: "91%" }}></div></div></div>
                            <div className="row-meta"><span className="trend up">↑ 2pts</span></div>
                        </div>
                        <div className="chart-row">
                            <div className="row-label">Open/OER</div>
                            <div className="bar-wrap"><div className="bar-track"><div className="seg seg-oer" style={{ width: "2%" }}></div><div className="seg seg-none" style={{ width: "98%" }}></div></div></div>
                            <div className="row-meta"><span className="trend flat">flat</span><span className="sections-ct">2%</span></div>
                        </div>
                        <div className="chart-row">
                            <div className="row-label">Custom / other</div>
                            <div className="bar-wrap"><div className="bar-track"><div className="seg seg-comp" style={{ width: "5%" }}></div><div className="seg seg-none" style={{ width: "95%" }}></div></div></div>
                            <div className="row-meta"><span className="trend flat">flat</span><span className="sections-ct">5%</span></div>
                        </div>
                    </div>
                    <div className="disclosure ">
                        Open/OER sits at 2% of US syllabi and has not moved. The international picture is materially different — the strategic question is whether that pattern arrives in North America, not whether Open/OER replaces commercial.
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div>
                            <div className="card-title">Where your disciplines are moving</div>
                            <div className="card-meta">Change in your share of network sections, year over year</div>
                        </div>
                    </div>
                    <div className="table-scroll">
                        <table className="fh-table">
                            <thead>
                                <tr><th>Discipline</th><th className="num">Your share</th><th className="num">Network sections</th><th className="num">YoY</th><th>Read</th></tr>
                            </thead>
                            <tbody>
                                <tr><td className="course-name">Nursing</td><td className="num">21%</td>
                                    <td className="num">14,200</td><td className="num pos">+6.0%</td>
                                    <td><span className="tag-pill risk-lo">Growing with you</span></td></tr>
                                <tr><td className="course-name">Psychology</td>
                                    <td className="num">17%</td><td className="num">31,600</td>
                                    <td className="num pos">+2.9%</td><td>
                                        <span className="tag-pill risk-lo">Holding</span></td></tr>
                                <tr><td className="course-name">Economics</td>
                                    <td className="num">24%</td>
                                    <td className="num">18,900</td>
                                    <td className="num neg">−2.1%</td>
                                    <td><span className="tag-pill risk-med">Market shrinking</span></td></tr>
                                <tr><td className="course-name">Biology</td>
                                    <td className="num">12%</td><td className="num">27,400</td>
                                    <td className="num neg">−3.6%</td>
                                    <td><span className="tag-pill risk-hi">Losing ground</span></td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="card-meta">
                        Discipline is carried on the course record. Where a publisher's BISAC filing is sparse or inconsistent, the subject shown here is inferred from syllabus and course signal instead.
                    </div>
                </div>

            </div>
            <div className="asks-card">
                <div className="asks-label">Questions this bucket answers</div>
                <div className="asks">
                    <div className="ask"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7" /></svg>If total access keeps growing, how exposed is my list?</div>
                    <div className="ask"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7" /></svg>Is the international Open/OER picture arriving in North America?</div>
                    <div className="ask"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7" /></svg>Which disciplines are shrinking underneath me?</div>
                    <div className="ask"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7" /></svg>Where do I sit against the market, not against my own plan?</div>
                </div>
            </div>
        </div>


    )
}
export default Strategic;
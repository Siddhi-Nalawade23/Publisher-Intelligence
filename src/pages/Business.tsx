import "./Business.scss"
import "./Field.css"
import * as Progress from "@radix-ui/react-progress";
function Business() {
    return (
        <div className="field-page">
            <div className="page-header">
                <div className="page-eyebrow">Bucket 3 of 4 · Business intelligence</div>
                <div className="page-title">The money</div>
                <div className="page-sub">Revenue direction and anonymised comparative pricing, cut by discipline. This is the pricing view from the QBR deck, made routine rather than quarterly.</div>
            </div>
            <div className="kpi-row">
                <div className="kpi">
                    <div className="kpi-label">Price index</div>
                    <div className="kpi-value">118</div>
                    <div className="kpi-delta">Network = 100</div>
                </div>
                <div className="kpi">
                    <div className="kpi-label">Your list increase</div>
                    <div className="kpi-value">9.8%</div>
                    <div className="kpi-delta down">Network average: 3.1%</div>
                </div>
                <div className="kpi">
                    <div className="kpi-label">Revenue, YoY</div>
                    <div className="kpi-value">+5.4%</div>
                    <div className="kpi-delta up">Network average: +3.8%</div>
                </div>
                <div className="kpi alert">
                    <div className="kpi-label">Revenue at risk</div>
                    <div className="kpi-value">$2.4M</div>
                    <div className="kpi-delta">Behind 214 at-risk adoptions</div>
                </div>
            </div>


            <div className="card">
                <div className="card-header">
                    <div>
                        <div className="card-title">Comparative pricing by discipline</div>
                        <div className="card-meta">Your average student price against the anonymised network median for the same course profile. No competitor is ever named.</div>
                    </div>
                    <span className="fresh term">Refreshed at list change</span>
                </div>

                <div className="health-note">
                    <span className="health-note-icon">ⓘ</span>
                    <div>
                        <div>An increase reads differently depending on where you started.</div>
                        <div>A 9.8% increase from an index of 118 lands very differently from the same increase off 92. The index is what makes the increase interpretable, which is why both travel together here.</div>
                    </div>
                </div>

                <div className="table-scroll">
                    <table className="fh-table">
                        <thead>
                            <tr>
                                <th>Discipline</th>
                                <th className="num">Your avg. price</th>
                                <th className="num">Network median</th>
                                <th className="num">Index</th>
                                <th className="num">Your increase</th>
                                <th className="num">Network increase</th>
                                <th>Position</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="course-name">Economics</td>
                                <td className="num">$94.00</td><td className="num">$79.50</td>
                                <td className="num neg">118</td><td className="num neg">9.8%</td><td className="num neu">3.1%</td>
                                <td><span className="tag-pill risk-hi">Well above network</span></td>
                            </tr>
                            <tr>
                                <td className="course-name">Biology</td>
                                <td className="num">$112.00</td><td className="num">$104.00</td>
                                <td className="num neu">108</td><td className="num neu">4.2%</td><td className="num neu">3.6%</td>
                                <td><span className="tag-pill risk-med">Slightly above</span></td>
                            </tr>
                            <tr>
                                <td className="course-name">Psychology</td>
                                <td className="num">$81.00</td><td className="num">$84.00</td>
                                <td className="num pos">96</td><td className="num neu">2.8%</td><td className="num neu">3.0%</td>
                                <td><span className="tag-pill risk-lo">In line</span></td>
                            </tr>
                            <tr>
                                <td className="course-name">Nursing</td>
                                <td className="num">$127.00</td><td className="num">$138.00</td>
                                <td className="num pos">92</td><td className="num neu">3.4%</td><td className="num neu">4.1%</td>
                                <td><span className="tag-pill risk-lo">Below network</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="disclosure">
                    Prices are aggregated across all network transactions for comparable course profiles and rounded. Sample data throughout.
                </div>
            </div>
            <div className="split">
                <div className="card">
                    <div className="card-header">
                        <div>
                            <div className="card-title">Revenue, year over year</div>
                            <div className="card-meta">Your list, by discipline</div>
                        </div>
                    </div>
                    <div className="chart-area">
    <div className="chart-row">
        <div className="row-label">Nursing</div>
        <div className="bar-wrap">
            <Progress.Root
                className="bar-track"
                value={11.2}
                aria-label="Nursing: +11.2% year over year"
            >
                <Progress.Indicator className="seg-fill seg-you" style={{ width: "56%" }}>
                    <span className="seg-you">+11.2%</span>
                </Progress.Indicator>
            </Progress.Root>
        </div>
        <div className="row-meta"><span className="sections-ct">$8.1M</span></div>
    </div>

    <div className="chart-row">
        <div className="row-label">Psychology</div>
        <div className="bar-wrap">
            <Progress.Root
                className="bar-track"
                value={7.0}
                aria-label="Psychology: +7.0% year over year"
            >
                <Progress.Indicator className="seg-fill seg-you" style={{ width: "38%" }}>
                    <span className="seg-you">+7.0%</span>
                </Progress.Indicator>
            </Progress.Root>
        </div>
        <div className="row-meta"><span className="sections-ct">$12.6M</span></div>
    </div>

    <div className="chart-row">
        <div className="row-label">Economics</div>
        <div className="bar-wrap">
            <Progress.Root
                className="bar-track"
                value={4.2}
                aria-label="Economics: +4.2% year over year"
            >
                <Progress.Indicator className="seg-fill seg-you" style={{ width: "24%" }}>
                    <span className="seg-you">+4.2%</span>
                </Progress.Indicator>
            </Progress.Root>
        </div>
        <div className="row-meta"><span className="sections-ct">$9.4M</span></div>
    </div>

    <div className="chart-row">
        <div className="row-label">Biology</div>
        <div className="bar-wrap">
            <Progress.Root
                className="bar-track"
                value={1.8}
                aria-label="Biology: -1.8% year over year"
            >
                <Progress.Indicator className="seg-fill seg-slate" style={{ width: "14%" }}>
                    <span className="seg-you-bus">−1.8%</span>
                </Progress.Indicator>
            </Progress.Root>
        </div>
        <div className="row-meta"><span className="sections-ct">$6.2M</span></div>
    </div>
</div>
                    <div className="disclosure">Revenue growth in nursing is running ahead of the market; biology is the only discipline where price and share are moving in opposite directions.</div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <div>
                            <div className="card-title">Retention economics</div>
                            <div className="card-meta">Rolling four terms, against network</div>
                        </div>
                    </div>
                    <div className="table-scroll">
                        <table className="fh-table">
                            <thead>
                                <tr><th>Measure</th><th className="num">You</th><th className="num">Network</th><th>Read</th></tr>
                            </thead>
                            <tbody>
                                <tr><td className="course-name">Adoption retention</td><td className="num neg">88%</td><td className="num">91%</td><td><span className="tag-pill risk-med">3pts behind</span></td></tr>
                                <tr><td className="course-name">Revenue per adoption</td><td className="num pos">$11,400</td><td className="num">$9,800</td><td><span className="tag-pill risk-lo">Above network</span></td></tr>
                                <tr><td className="course-name">Opt-out rate</td><td className="num neg">7.2%</td><td className="num">5.4%</td><td><span className="tag-pill risk-hi">Above network</span></td></tr>
                                <tr><td className="course-name">Repeat-term adoptions</td><td className="num neu">64%</td><td className="num">66%</td><td><span className="tag-pill risk-lo">In line</span></td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="disclosure">Higher revenue per adoption with lower retention and a higher opt-out rate is the pattern that price positioning tends to produce.</div>
                </div>
            </div>

            <div className="asks-card">
                <div className="asks-label">Questions this bucket answers</div>
                <div className="asks">
                    <div className="ask"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"></path></svg>Is my pricing out of step in this discipline, or across the board?</div>
                    <div className="ask"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"></path></svg>What revenue sits behind the churn the field is seeing?</div>
                    <div className="ask"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"></path></svg>Did this year's increase actually land?</div>
                    <div className="ask"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"></path></svg>Where am I buying share and where am I harvesting it?</div>
                </div>
            </div>
        </div>
    )
}
export default Business;
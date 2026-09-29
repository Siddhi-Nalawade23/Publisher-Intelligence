import Chart from "react-apexcharts";
import { series, options } from "../data/apexcharts";
import "./Editorial.scss";
import * as Progress from "@radix-ui/react-progress";

function Editorial() {
    return (
        <div className="field-page">
            <div className="page-header">
                <div className="page-eyebrow">
                    Bucket 4 of 4 · Editorial intelligence
                </div>
                <div className="page-title">
                    What's actually read{" "}
                    <span className="persona-chip">
                        Editorial &amp; content strategy
                    </span>{" "}
                </div>
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
                <div className="chart-area">
                    <Chart type="bar" series={series} options={options} height={210} />
                </div>
            </div>
            <div className="split">
                <div className="card">
                    <div className="card-header">
                        <div>
                            <div className="card-title">Assigned vs. opened, by title</div>
                            <div className="card-meta">Your intro list, current term</div>
                        </div>
                    </div>
                    <div className="table-scroll">
                        <table className="fh-table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th className="num">Ch. assigned</th>
                                    <th className="num">Ch. read</th>
                                    <th className="num">Reach</th>
                                    <th>Read</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="course-name">
                                        Principles of Microeconomics, 9e
                                    </td>
                                    <td className="num">16</td>
                                    <td className="num">8</td>
                                    <td className="num neg">50%</td>
                                    <td>
                                        <span className="tag-pill risk-hi">Back half unused</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="course-name">
                                        Principles of Macroeconomics, 9e
                                    </td>
                                    <td className="num">15</td>
                                    <td className="num">11</td>
                                    <td className="num neu">73%</td>
                                    <td>
                                        <span className="tag-pill risk-med">Two cold chapters</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="course-name">Introductory Biology, 4e</td>
                                    <td className="num">22</td>
                                    <td className="num">19</td>
                                    <td className="num pos">86%</td>
                                    <td>
                                        <span className="tag-pill risk-lo">Well matched</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="course-name">General Psychology, 6e</td>
                                    <td className="num">18</td>
                                    <td className="num">16</td>
                                    <td className="num pos">89%</td>
                                    <td>
                                        <span className="tag-pill risk-lo">Well matched</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="disclosure">
                        Reach is the share of assigned chapters opened by more than half the
                        cohort. The gap between assigned and read is the revision signal.
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <div>
                            <div className="card-title">Reading behaviour vs. network</div>
                            <div className="card-meta">Same course profile, anonymised</div>
                        </div>
                    </div>
                    <div className="chart-area">
                        <div className="chart-row">
                            <div className="row-label">Cost per session</div>

                            <div className="bar-wrap">
                                <Progress.Root
                                    className="bench-rail"
                                    value={70}
                                    aria-label="Cost per session: You $0.42"
                                >
                                    <Progress.Indicator
                                        className="bench-fill"
                                        style={{ width: "70%" }}
                                    />

                                    <div
                                        className="bench-mark"
                                        style={{ left: "48%" }}
                                        aria-label="Network benchmark: $0.29"
                                    >
                                        <span>Net $0.29</span>
                                    </div>

                                    <span className="bench-val">$0.42</span>
                                </Progress.Root>
                            </div>

                            <div className="row-meta">
                                <span className="flag watch">45% above</span>
                            </div>
                        </div>

                        <div className="chart-row">
                            <div className="row-label">Sessions / student</div>

                            <div className="bar-wrap">
                                <Progress.Root
                                    className="bench-rail"
                                    value={41}
                                    aria-label="Sessions per student: You 24"
                                >
                                    <Progress.Indicator
                                        className="bench-fill"
                                        style={{ width: "41%" }}
                                    />

                                    <div
                                        className="bench-mark"
                                        style={{ left: "57%" }}
                                        aria-label="Network benchmark: 34"
                                    >
                                        <span>Net 34</span>
                                    </div>

                                    <span className="bench-val">24</span>
                                </Progress.Root>
                            </div>

                            <div className="row-meta">
                                <span className="flag gap">Below network</span>
                            </div>
                        </div>

                        <div className="chart-row">
                            <div className="row-label">Median session</div>

                            <div className="bar-wrap">
                                <Progress.Root
                                    className="bench-rail"
                                    value={56}
                                    aria-label="Median session: You 14 min"
                                >
                                    <Progress.Indicator
                                        className="bench-fill"
                                        style={{ width: "56%" }}
                                    />

                                    <div
                                        className="bench-mark"
                                        style={{ left: "48%" }}
                                        aria-label="Network benchmark: 12 min"
                                    >
                                        <span>Net 12 min</span>
                                    </div>

                                    <span className="bench-val">14 min</span>
                                </Progress.Root>
                            </div>

                            <div className="row-meta">
                                <span className="flag strong">Above network</span>
                            </div>
                        </div>
                    </div>
                    <div className="disclosure">
                        Fewer, longer sessions at a higher cost per session — the pattern of
                        a reference text rather than a course companion.
                    </div>
                </div>
            </div>

            <div className="asks-card">
                <div className="asks-label">Questions this bucket answers</div>
                <div className="asks">
                    <div className="ask">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2.5"
                        >
                            <path d="M5 12l5 5L20 7"></path>
                        </svg>
                        Which chapters is the next edition carrying for nothing?
                    </div>
                    <div className="ask">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2.5"
                        >
                            <path d="M5 12l5 5L20 7"></path>
                        </svg>
                        Where does engagement contradict what faculty say they assign?
                    </div>
                    <div className="ask">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2.5"
                        >
                            <path d="M5 12l5 5L20 7"></path>
                        </svg>
                        Who is reading my book this week?
                    </div>
                    <div className="ask">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2.5"
                        >
                            <path d="M5 12l5 5L20 7"></path>
                        </svg>
                        Is the price defensible given how the book is used?
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Editorial;

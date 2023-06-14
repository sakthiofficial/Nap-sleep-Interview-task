import TodayIcon from '@mui/icons-material/Today';
import { Dropdown } from "../Hoc/Dropdown";
import { Graph } from '../Hoc/Graph';
import { AdsTable } from '../Components/AdsTable';
export function Advertising() {

    return (
        <div className="ads">
            <div className="ads_header">
                <div className="ads_header_title">
                    <h1>Advertising</h1>

                </div>
                <div className="ads_header_options">
                    <div className="ads_header_options-dropdown">
                        <Dropdown name="MarketPlace" list={["Amazon 23r"]} />
                        <Dropdown name="Ad type" list={["All"]} />

                    </div>
                    <div className="ads_header_options-date">
                        <p>2022-11-08   -    2022-12-23 </p>
                        <TodayIcon className='icon' />
                    </div>
                </div>

            </div>

            {/* {name:"",amount:"" , percentage:"", clr:""} */}
            <div className="ads_graphs">
                <Graph title="Apps Spends & Return" specslist={[{ name: "Revenue", amount: "14.5k", percentage: "19.9%", clr: "green" },
                { name: "Ads Spend", amount: "14.5k", percentage: "19.9%", clr: "red" }, { name: "Cpc", amount: "0.95", percentage: "19.9%", clr: "red" },
                { name: "Acos", amount: "51.8%", percentage: "6.8%", clr: "green" }]}
                    data={[
                        {
                            name: "Revenue",
                            type: "bar",
                            data: [5000, 5000, 8000, 4800, 5500, 4500, 5500, 5300, 5500, 2500, 5300],
                            width: "40px"
                        },
                        {
                            name: "Acos",
                            type: "line",
                            data: [4, 4000, 8000, 4800, 5500, 4500, 5500, 5300, 5500, 2500, 5300]
                        }
                    ]}
                />
                <Graph title="Click Throgh Rate & Clicks" specslist={[{ name: "Impression", amount: "10.5m", percentage: "19.9%", clr: "red" }, { name: "Clicks", amount: "10.5k", percentage: "19.9%", clr: "green" }, { name: "Ctr", amount: "0.16%", percentage: "9.9%", clr: "green" }]}
                    data={[
                        {
                            name: "Clicks",
                            type: "line",
                            data: [0, 1000.9000, 0, 5, 11000, 9000, 0, 1000, 4000],
                            width: "40px"
                        },
                        {
                            name: "Ctr",
                            type: "line",
                            data: [2, 2000, 1000, 5000, 5, 6, 10000, 2000, 5000, 10, 5000, 4000]
                        }
                    ]}
                />

                <Graph title="Converstion Rate & Order" specslist={[{ name: "Cvr", amount: "5.3%", percentage: "19.9%", clr: "red" }, { name: "Orders", amount: "10.5k", percentage: "19.9%", clr: "green" }]}
                    data={[
                        {
                            name: "Cvr",
                            type: "line",
                            data: [0, 1000.9000, 0, 5, 11000, 9000, 0, 1000, 4000],
                            width: "40px"
                        },
                        {
                            name: "Orders",
                            type: "line",
                            data: [2, 2000, 1000, 5000, 5, 6, 10000, 2000, 5000, 10, 5000, 4000]
                        }
                    ]}
                />


            </div>
            <div className="ads_table">
                <AdsTable />
            </div>
        </div>

    );
}


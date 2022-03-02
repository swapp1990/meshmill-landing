import { Meta } from "../layout/Meta";
import { AppConfig } from "../utils/AppConfig";
import { Landing } from "./Landing";

const Base = () => (
  <div>
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Landing></Landing>
  </div>
);

export { Base };

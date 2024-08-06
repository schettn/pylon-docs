import { useId } from "react";
import styles from "./features.module.css";

// import BackendAgnosticIcon from "../components/icons/backend-agnostic";
// import LightweightIcon from "../components/icons/lightweight";
// import PaginationIcon from "../components/icons/pagination";
// import RealtimeIcon from "../components/icons/realtime";
// import RemoteLocalIcon from "../components/icons/remote-local";
// import RenderingStrategiesIcon from "../components/icons/rendering-strategies";
// import SuspenseIcon from "../components/icons/suspense";
// import TypeScriptIcon from "../components/icons/typescript";

import { Icon } from "./icon";

export function Feature({ text, icon }) {
  return (
    <div className={styles.feature}>
      {icon}
      <h4>{text}</h4>
    </div>
  );
}

/** @type {{ key: string; icon: React.FC }[]} */
const FEATURES_LIST = [
  {
    key: "realtimeSchema",
    icon: <Icon icon="lightbulb" className="w-[20px]" />,
  },
  {
    key: "typeSafety",
    icon: <Icon icon="lightbulb" className="w-[20px]" />,
  },
  {
    key: "authentication",
    icon: <Icon icon="lightbulb" className="w-[20px]" />,
  },
  {
    key: "authorization",
    icon: <Icon icon="lightbulb" className="w-[20px]" />,
  },
  {
    key: "logging",
    icon: <Icon icon="lightbulb" className="w-[20px]" />,
  },
  {
    key: "errorTracking",
    icon: <Icon icon="lightbulb" className="w-[20px]" />,
  },
  {
    key: "databaseIntegration",
    icon: <Icon icon="lightbulb" className="w-[20px]" />,
  },
  {
    key: "optimizedDeployment",
    icon: <Icon icon="lightbulb" className="w-[20px]" />,
  },
];

export default function Features() {
  const keyId = useId();

  const features = {
    realtimeSchema: "Real-time Schema",
    typeSafety: "Type Safety",
    authentication: "OIDC Auth",
    authorization: "Role-Based",
    logging: "Logging",
    errorTracking: "Error Tracking",
    databaseIntegration: "Prisma Integration",
    optimizedDeployment: "Docker Ready",
  };

  return (
    <div className="mx-auto max-w-full w-[880px] text-center px-4 mb-10">
      <p className="text-lg mb-2 text-gray-600 md:!text-2xl">
        A code-first approach to GraphQL API development
      </p>
      <div className={styles.features}>
        {FEATURES_LIST.map(({ key, icon }) => (
          <Feature text={features[key]} icon={icon} key={keyId + key} />
        ))}
      </div>
    </div>
  );
}

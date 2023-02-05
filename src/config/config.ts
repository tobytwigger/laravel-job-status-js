import Config from "~/interfaces/Config";
import {CustomWindow} from "~/types/window";

declare let window: CustomWindow;

const allSettings = (): Config => {
    let config = window.JobStatusConfig || {};
    if(isSettingConfig(config)) {
        return config;
    } else {
        throw new Error('Have you forgotten to share the config with the frontend?');
    }
};

function isSettingConfig(config: Config | any): config is Config {
    return (config as Config).baseUrl !== undefined;
}

const hasSetting = (key: string) => {
    return allSettings().hasOwnProperty(key);
};

const baseUrl = () => {
    return allSettings().baseUrl;
}

export { allSettings, hasSetting, baseUrl };
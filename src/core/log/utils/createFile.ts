import { ILogSettings } from '../../../interfaces/settings/ILogSettings';
import fs from 'fs';
import DateNow from '../../../utils/dateNow';
import TimeNow from '../../../utils/timeNow';

export function createFile(logSettings: ILogSettings, message: string) {
  const { pathLog } = logSettings;

  const outPath = pathLog ? `${ pathLog }/${ DateNow().join("_") }_${ TimeNow().join("_") }.txt` : `${ __dirname }/logs/${ new Date() }.txt`;

  fs.writeFileSync(outPath, message); 
}
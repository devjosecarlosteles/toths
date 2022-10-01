import { IGenericLog } from '../../interfaces/IGenericLog';


const messageDefault = (message: string) => console.log(`[INFO] - ${ new Date()} - ${ message }`);

export function info ({ message, settings }: IGenericLog): string {
  messageDefault(message);
  return message;
}

export function warn ({ message, settings }: IGenericLog): string {
  messageDefault(message);
  return message;
}

export function error ({ message, settings }: IGenericLog): string {
  messageDefault(message);
  return message;
}
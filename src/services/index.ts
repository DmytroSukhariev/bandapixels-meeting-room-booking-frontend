import {BackEndEvent} from "../types/events";
import { Post } from './api-client';

export async function PostBackendEvent(data: BackEndEvent) {
    return Post<any>('/booking', data)
}

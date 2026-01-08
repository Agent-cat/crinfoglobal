'use server'

import { revalidateTag } from 'next/cache'

/**
 * Revalidates a cache tag to ensure fresh data is fetched on the next request.
 * Useful for reflecting admin changes immediately in a cached environment.
 */
export async function revalidateContent(tag) {
    if (!tag) return;
    console.log(`Revalidating tag: ${tag}`);
    revalidateTag(tag);
}

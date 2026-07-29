// This is a simplified example config file for quickstart
// Some not frequently used features are omitted/commented out here
// For a full-featured example, please refer to `uptime.config.full.ts`

// Don't edit this line
import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: 'Status Web Fatah',
  // Links shown at the header of your status page
  links: [
    { link: 'https://fatah.web.id', label: 'fatah.web.id' },
    { link: 'https://fatahmr.my.id', label: 'fatahmr.my.id' },
  ],
}

const workerConfig: WorkerConfig = {
  // Define all your monitors here
  monitors: [
    {
      id: 'fatah_web_id',
      name: 'fatah.web.id',
      method: 'GET',
      target: 'https://fatah.web.id',
      statusPageLink: 'https://fatah.web.id',
      timeout: 10000,
    },
    {
      id: 'fatahmr_my_id',
      name: 'fatahmr.my.id',
      method: 'GET',
      target: 'https://fatahmr.my.id',
      statusPageLink: 'https://fatahmr.my.id',
      timeout: 10000,
    },
  ],
  // Notification settings for Telegram Bot (menggunakan Environment Variables agar aman)
  notification: {
    webhook: {
      // Token dan Chat ID diambil dari Cloudflare Worker Secret / Environment Variables
      url: `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN || 'YOUR_BOT_TOKEN'}/sendMessage`,
      payloadType: 'x-www-form-urlencoded',
      payload: {
        chat_id: process.env.TELEGRAM_CHAT_ID || 'YOUR_CHAT_ID',
        text: '$MSG',
      },
      timeout: 10000,
    },
    timeZone: 'Asia/Jakarta',
    // Grace period dalam menit sebelum mengirim notifikasi (mencegah false alarm)
    gracePeriod: 2,
  },
}

const maintenances: MaintenanceConfig[] = []

// Don't edit this line
export { maintenances, pageConfig, workerConfig }


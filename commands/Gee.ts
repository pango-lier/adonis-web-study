import { BaseCommand } from '@adonisjs/core/build/standalone'
import Redis from '@ioc:Adonis/Addons/Redis'

export default class Gee extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'gee'

  /**
   * Command description is displayed in the "help" output
   */
  public static description = ''

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest`
     * afterwards.
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: false,
  }

  public async run() {
    await Redis.set('foo', 'bar')
    const value = await Redis.get('foo')
    this.logger.info(value || '')
  }
}

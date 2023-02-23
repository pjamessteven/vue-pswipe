import { PswpOptions, ManualCreateArgs } from '@/type'
import { GlobalOption } from '@/config'
import {  manualCreate, UI } from '@/utils'
import PhotoswipeComponent from '@/components/photoswipe.vue'


const PhotoswipePlugin = {
    install(app: any, options?: PswpOptions) {

      if (!options) {
        options = {};
      } else {
        GlobalOption.extend(options)
      }
      const Photoswipe = new PhotoswipeComponent(options);
      app.component('vue-pswp', Photoswipe);
        app.config.globalProperties.$Pswp = {
            open(args: ManualCreateArgs) {
                UI.append()
                return manualCreate(args)
            }
      }
    },
};

export default PhotoswipePlugin;

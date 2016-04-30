```C#
using Uno;
using Uno.Collections;
using Uno.Compiler.ExportTargetInterop;

using Fuse;
using Fuse.Scripting;
using Fuse.Reactive;

namespace JSAudioPlayer
{
    public class Player : NativeModule
    {
        public Player()
        {
            AddMember(new NativeFunction("Create", (NativeCallback)Create));
            AddMember(new NativeFunction("Load", (NativeCallback)Load));
            AddMember(new NativeFunction("Play", (NativeCallback)Play));
        }

        static object Load(Context c, object[] args)
        {
            var player = args[0] as IMediaPlayer;
            var filePath = args[1] as string;

            player.Load(filePath);

            return null;
        }

        static object Play(Context c, object[] args)
        {
            var player = args[0] as IMediaPlayer;
            player.Play();
            return null;
        }

        static object Create(Context c, object[] args)
        {
            return MediaPlayer.Create();
        }
    }

    static class MediaPlayer
    {
        public static IMediaPlayer Create()
        {
            if defined(Android) return new AndroidMediaPlayer();
            else if defined(iOS) return new iOSMediaPlayer();

            throw new NotImplementedException();
  
        }
    }

    interface IMediaPlayer
    {
        void Load(string filePath);
        void Play();
    }

    extern(Android) class AndroidMediaPlayer : IMediaPlayer
    {

        readonly Java.Object _mediaPlayerHandle;

        public AndroidMediaPlayer()
        {
            _mediaPlayerHandle = Create();
        }

        public void Load(string filePath) { Load(_mediaPlayerHandle, filePath); }

        public void Play() { Play(_mediaPlayerHandle); }

        [Foreign(Language.Java)]
        static Java.Object Create()
        @{
            return new android.media.MediaPlayer();
        @}

        [Foreign(Language.Java)]
        static void Load(Java.Object handle, string filePath)
        @{
            ((android.media.MediaPlayer)handle).setDataSource(filePath);
            ((android.media.MediaPlayer)handle).prepare();
        @}

        [Foreign(Language.Java)]
        static void Play(Java.Object handle)
        @{
            ((android.media.MediaPlayer)handle).start();
        @}
    }

    extern(iOS) class iOSMediaPlayer : IMediaPlayer
    {
        public void Load(string filePath) { }
        public void Play() { }
    }
}


```

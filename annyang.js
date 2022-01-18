if(annyang){
    let voices;

    let utter = new SpeechSynthesisUtterance();
    utter.rate = 1;
    utter.pitch = 0.5;
    utter.lang = 'es-ES';

    window.speechSynthesis.onvoiceschanged = function () {
        voices = window.speechSynthesis.getVoices();
        console.log(voices);
    }

    let commands = {
        'hello': function() { alert("Hello wordl!"); }
    };

    annyang.addCommands(commands);

    annyang.start({ autoStart: false, continuous: true});
}
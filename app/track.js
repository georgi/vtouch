var Track = new Class({
    Extends: Widget,

    initialize: function(options) {
        Slider.prototype.initialize.call(this, options);

        this.layout = 'vertical';

        this.label = this.add({
            type: Label,
            label: this.name,
            bgColor: '#300'         
        });

        this.volume = this.add({
            type: MeterSlider,
            sizeHint: 4,
            marginTop: 10,
            on: {
                change: function(value) {
                    this.fireEvent('volume', [this.track, value]);
                }.bind(this)
            }
        });

        this.mute = this.add({
            type: Button,
            bgColor: '#300',
            fgColor: '#900',
            fontColor: 'rgba(255,255,255,0.5)',
            marginTop: 10,
            label: this.track,
            on: {
                click: function(state) {
                    this.fireEvent('mute', [this.track, state]);
                }.bind(this)
            }
        });

        this.solo = this.add({
            type: Button,
            bgColor: '#030',
            fgColor: '#060',
            fontColor: 'rgba(255,255,255,0.5)',
            marginTop: 10,
            label: 'S',
            on: {
                click: function(state) {
                    this.fireEvent('solo', [this.track, state]);
                }.bind(this)
            }
        });

        this.arm = this.add({
            type: Button,
            bgColor: '#003',
            fgColor: '#006',
            fontColor: 'rgba(255,255,255,0.5)',
            label: 'O',
            marginTop: 10,
            on: {
                click: function(state) {
                    this.fireEvent('arm', [this.track, state]);
                }.bind(this)
            }
        });
    }
});
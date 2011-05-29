var Slider = new Class({
    Extends: Widget,

    initialize: function(options) {
        this._value = 0;
        this.handleSize = 20;
        this.handlePos = 0;
        this.lastEventTime = 0;
        this.min = 0;
        this.max = 1;
        this.label = "";
        this.fgColor = '#0b9eff';
        this.bgColor = '#3a3637';

        Widget.prototype.initialize.call(this, options);
    },

    drawCanvas: function(context) {
        var position = (this.height - this.handleSize) * 
                ((this._value - this.min) / (this.max - this.min));

        this.handlePos = this.height - this.handleSize - position;        

        context.fillStyle = this.bgColor;
        context.fillRect(0, 0, this.width, this.height);

        context.fillStyle = this.fgColor;
        context.fillRect(0, this.handlePos, this.width, this.height-this.handlePos);//*-1);

        context.fillStyle = this.fontColor;
        context.font = "20px Helvetica";
        context.fillText(this.label, 2, this.height - 40, this.width - 20)
    },

    value: function(value) {
        if (value === undefined) {
            return this._value;
        }
        else {
            this._value = Math.max(this.min, Math.min(this.max, value));
        }
    },

    handleEvent: function(event) {    
        var value = this.min + ((this.height - event.localY) / this.height) * (this.max - this.min);

        if (Math.abs(value - this._value) > 0.05) {
            this.lastEventTime = Number(new Date());
            this.value(value);
            this.fireEvent("change", this._value);
        }
    },

    onTouchDown: function(event) {
        this.handleEvent(event);
        return true;
    },

    onTouchMove: function(event) {
        this.handleEvent(event);
        return true;
    }
});

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        sound_effect:cc.AudioClip,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    act:function(hero,direction)
    {
        var seq = cc.sequence(
            cc.spawn(
                cc.moveBy(0.5,0,40).easing(cc.easeBounceIn()),
                cc.fadeOut(0.5)
            ),
            cc.removeSelf()
        );
        var hero_cmp = hero.getComponent("hero");
        hero_cmp.set_value("normal_keys",hero_cmp.normal_keys + 1);
        this.node.runAction(seq);
        cc.audioEngine.playEffect(this.sound_effect,false);
    }

    // update (dt) {},
});

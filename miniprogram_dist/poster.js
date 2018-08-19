Component({
    properties: {
        config: {
            type: Object,
            value: {},
        }
    },
    methods: {
        onCreate() {
            const poster = this.selectComponent('#poster');
            poster.create(this.data.config);
        },
        onCreateSuccess(e) {
            const { detail } = e;
            this.triggerEvent('success', detail);
        },
        onCreateFail(err) {
            console.error(err);
            this.triggerEvent('fail', detail);
        }
    }
})
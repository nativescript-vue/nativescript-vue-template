module.exports = {
  data() {
    return {
      count: 42,
    };
  },
  computed: {
    message() {
      return this.count > 0
        ? `Tap tap tap! Only ${this.count} left!`
        : `Whoa! Slow down, we have hit the limit...`;
    },
  },
  template: `
    <StackLayout>
      <FlexboxLayout flexDirection="row" justifyContent="center">
        <Button @tap="decrement" text="-" class="btn btn-outline"/>
        <Label :text="count" alignSelf="baseline" class="h2"/>
        <Button @tap="increment" text="+" class="btn btn-outline"/>
      </FlexboxLayout>
      
      <Label class="p-20" :text="message"/>
    </StackLayout>
  `,
  methods: {
    increment() {
      this.count += 1;
    },
    decrement() {
      this.count -= 1;
    },
  },
};

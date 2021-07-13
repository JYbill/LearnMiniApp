"use strict";
Component({
    properties: {
        categoryArr: {
            type: Array,
            value: []
        }
    },
    data: {
        currentIndex: 0
    },
    methods: {
        handleItemTap: function (_a) {
            var mark = _a.mark;
            this.setData({
                currentIndex: mark.index
            });
        }
    },
    externalClasses: ['active']
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYi10YWItYmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYi10YWItYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxTQUFTLENBQUM7SUFDUixVQUFVLEVBQUU7UUFDVixXQUFXLEVBQUU7WUFDWCxJQUFJLEVBQUUsS0FBSztZQUNYLEtBQUssRUFBRSxFQUFFO1NBQ1Y7S0FDRjtJQUNELElBQUksRUFBRTtRQUNKLFlBQVksRUFBRSxDQUFDO0tBQ2hCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsYUFBYSxFQUFiLFVBQWMsRUFBVztnQkFBVixJQUFJLFVBQUE7WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDekIsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0lBQ0QsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDO0NBQzVCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vQ29tcG9uZW50IE9iamVjdFxyXG5Db21wb25lbnQoe1xyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIGNhdGVnb3J5QXJyOiB7XHJcbiAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICB2YWx1ZTogW11cclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGE6IHtcclxuICAgIGN1cnJlbnRJbmRleDogMFxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgaGFuZGxlSXRlbVRhcCh7bWFya306IGFueSk6IHZvaWQge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGN1cnJlbnRJbmRleDogbWFyay5pbmRleFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZXh0ZXJuYWxDbGFzc2VzOiBbJ2FjdGl2ZSddXHJcbn0pOyJdfQ==
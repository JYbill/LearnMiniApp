"use strict";
Component({
    properties: {
        title: {
            type: String,
            value: '默认标题',
            observer: function (oldV, newV) {
                console.log(oldV, newV);
            }
        }
    },
    externalClasses: ['my-class']
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktcHJvcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm15LXByb3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFNBQVMsQ0FBQztJQUNSLFVBQVUsRUFBRTtRQUNWLEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLE1BQU07WUFDYixRQUFRLEVBQVIsVUFBUyxJQUFJLEVBQUUsSUFBSTtnQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUIsQ0FBQztTQUNGO0tBQ0Y7SUFDRCxlQUFlLEVBQUUsQ0FBQyxVQUFVLENBQUM7Q0FDOUIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy9Db21wb25lbnQgT2JqZWN0XHJcbkNvbXBvbmVudCh7XHJcbiAgcHJvcGVydGllczoge1xyXG4gICAgdGl0bGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJ+m7mOiupOagh+mimCcsXHJcbiAgICAgIG9ic2VydmVyKG9sZFYsIG5ld1YpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhvbGRWLCBuZXdWKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZXh0ZXJuYWxDbGFzc2VzOiBbJ215LWNsYXNzJ11cclxufSk7Il19
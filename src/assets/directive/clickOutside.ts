export const clickOutside = {
    mounted: (el: { clickOutsideEvent: { (event: any): void; (this: Document, ev: MouseEvent): any; }; contains: (arg0: any) => any; }, binding: { value: () => void; }) => {
        el.clickOutsideEvent = (event: { target: any; }) => {
            if (!(el == event.target || el.contains(event.target))) {
                binding.value();
            }
        };
        document.addEventListener("mousedown", el.clickOutsideEvent);
    },
    unmounted: (el: { clickOutsideEvent: (this: Document, ev: MouseEvent) => any; }) => {
        document.removeEventListener("mousedown", el.clickOutsideEvent);
    },
};
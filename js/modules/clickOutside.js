export default function initClickOutside() {
    const html = document.documentElement;
    HTMLAllCollection.addEventListener('click', handleClickOutside);

    function handleClickOutside(event) {
        callback();
    }
}
# postcss-text-stroke


## API

### Stylesheets

```css
.foo {
	text-stroke: [size] [color];
}
```

#### Examples

in
```
.foo {
	text-stroke: 8 #a13c32;
}
```
out
```
.foo {
  text-shadow: -8px -8px 0 #a13c32,-8px -7px 0 #a13c32,-8px -6px 0 #a13c32,-8px -5px 0 #a13c32,-8px -4px 0 #a13c32,-8px -3px 0 #a13c32,-8px -2px 0 #a13c32,-8px -1px 0 #a13c32,-8px 0 0 #a13c32,-8px 1px 0 #a13c32,-8px 2px 0 #a13c32,-8px 3px 0 #a13c32,-8px 4px 0 #a13c32,-8px 5px 0 #a13c32,-8px 6px 0 #a13c32,-8px 7px 0 #a13c32,-7px -8px 0 #a13c32,-7px -7px 0 #a13c32,-7px -6px 0 #a13c32,-7px -5px 0 #a13c32,-7px -4px 0 #a13c32,-7px -3px 0 #a13c32,-7px -2px 0 #a13c32,-7px -1px 0 #a13c32,-7px 0 0 #a13c32,-7px 1px 0 #a13c32,-7px 2px 0 #a13c32,-7px 3px 0 #a13c32,-7px 4px 0 #a13c32,-7px 5px 0 #a13c32,-7px 6px 0 #a13c32,-7px 7px 0 #a13c32,-6px -8px 0 #a13c32,-6px -7px 0 #a13c32,-6px -6px 0 #a13c32,-6px -5px 0 #a13c32,-6px -4px 0 #a13c32,-6px -3px 0 #a13c32,-6px -2px 0 #a13c32,-6px -1px 0 #a13c32,-6px 0 0 #a13c32,-6px 1px 0 #a13c32,-6px 2px 0 #a13c32,-6px 3px 0 #a13c32,-6px 4px 0 #a13c32,-6px 5px 0 #a13c32,-6px 6px 0 #a13c32,-6px 7px 0 #a13c32,-5px -8px 0 #a13c32,-5px -7px 0 #a13c32,-5px -6px 0 #a13c32,-5px -5px 0 #a13c32,-5px -4px 0 #a13c32,-5px -3px 0 #a13c32,-5px -2px 0 #a13c32,-5px -1px 0 #a13c32,-5px 0 0 #a13c32,-5px 1px 0 #a13c32,-5px 2px 0 #a13c32,-5px 3px 0 #a13c32,-5px 4px 0 #a13c32,-5px 5px 0 #a13c32,-5px 6px 0 #a13c32,-5px 7px 0 #a13c32,-4px -8px 0 #a13c32,-4px -7px 0 #a13c32,-4px -6px 0 #a13c32,-4px -5px 0 #a13c32,-4px -4px 0 #a13c32,-4px -3px 0 #a13c32,-4px -2px 0 #a13c32,-4px -1px 0 #a13c32,-4px 0 0 #a13c32,-4px 1px 0 #a13c32,-4px 2px 0 #a13c32,-4px 3px 0 #a13c32,-4px 4px 0 #a13c32,-4px 5px 0 #a13c32,-4px 6px 0 #a13c32,-4px 7px 0 #a13c32,-3px -8px 0 #a13c32,-3px -7px 0 #a13c32,-3px -6px 0 #a13c32,-3px -5px 0 #a13c32,-3px -4px 0 #a13c32,-3px -3px 0 #a13c32,-3px -2px 0 #a13c32,-3px -1px 0 #a13c32,-3px 0 0 #a13c32,-3px 1px 0 #a13c32,-3px 2px 0 #a13c32,-3px 3px 0 #a13c32,-3px 4px 0 #a13c32,-3px 5px 0 #a13c32,-3px 6px 0 #a13c32,-3px 7px 0 #a13c32,-2px -8px 0 #a13c32,-2px -7px 0 #a13c32,-2px -6px 0 #a13c32,-2px -5px 0 #a13c32,-2px -4px 0 #a13c32,-2px -3px 0 #a13c32,-2px -2px 0 #a13c32,-2px -1px 0 #a13c32,-2px 0 0 #a13c32,-2px 1px 0 #a13c32,-2px 2px 0 #a13c32,-2px 3px 0 #a13c32,-2px 4px 0 #a13c32,-2px 5px 0 #a13c32,-2px 6px 0 #a13c32,-2px 7px 0 #a13c32,-1px -8px 0 #a13c32,-1px -7px 0 #a13c32,-1px -6px 0 #a13c32,-1px -5px 0 #a13c32,-1px -4px 0 #a13c32,-1px -3px 0 #a13c32,-1px -2px 0 #a13c32,-1px -1px 0 #a13c32,-1px 0 0 #a13c32,-1px 1px 0 #a13c32,-1px 2px 0 #a13c32,-1px 3px 0 #a13c32,-1px 4px 0 #a13c32,-1px 5px 0 #a13c32,-1px 6px 0 #a13c32,-1px 7px 0 #a13c32,0 -8px 0 #a13c32,0 -7px 0 #a13c32,0 -6px 0 #a13c32,0 -5px 0 #a13c32,0 -4px 0 #a13c32,0 -3px 0 #a13c32,0 -2px 0 #a13c32,0 -1px 0 #a13c32,0 0 0 #a13c32,0 1px 0 #a13c32,0 2px 0 #a13c32,0 3px 0 #a13c32,0 4px 0 #a13c32,0 5px 0 #a13c32,0 6px 0 #a13c32,0 7px 0 #a13c32,1px -8px 0 #a13c32,1px -7px 0 #a13c32,1px -6px 0 #a13c32,1px -5px 0 #a13c32,1px -4px 0 #a13c32,1px -3px 0 #a13c32,1px -2px 0 #a13c32,1px -1px 0 #a13c32,1px 0 0 #a13c32,1px 1px 0 #a13c32,1px 2px 0 #a13c32,1px 3px 0 #a13c32,1px 4px 0 #a13c32,1px 5px 0 #a13c32,1px 6px 0 #a13c32,1px 7px 0 #a13c32,2px -8px 0 #a13c32,2px -7px 0 #a13c32,2px -6px 0 #a13c32,2px -5px 0 #a13c32,2px -4px 0 #a13c32,2px -3px 0 #a13c32,2px -2px 0 #a13c32,2px -1px 0 #a13c32,2px 0 0 #a13c32,2px 1px 0 #a13c32,2px 2px 0 #a13c32,2px 3px 0 #a13c32,2px 4px 0 #a13c32,2px 5px 0 #a13c32,2px 6px 0 #a13c32,2px 7px 0 #a13c32,3px -8px 0 #a13c32,3px -7px 0 #a13c32,3px -6px 0 #a13c32,3px -5px 0 #a13c32,3px -4px 0 #a13c32,3px -3px 0 #a13c32,3px -2px 0 #a13c32,3px -1px 0 #a13c32,3px 0 0 #a13c32,3px 1px 0 #a13c32,3px 2px 0 #a13c32,3px 3px 0 #a13c32,3px 4px 0 #a13c32,3px 5px 0 #a13c32,3px 6px 0 #a13c32,3px 7px 0 #a13c32,4px -8px 0 #a13c32,4px -7px 0 #a13c32,4px -6px 0 #a13c32,4px -5px 0 #a13c32,4px -4px 0 #a13c32,4px -3px 0 #a13c32,4px -2px 0 #a13c32,4px -1px 0 #a13c32,4px 0 0 #a13c32,4px 1px 0 #a13c32,4px 2px 0 #a13c32,4px 3px 0 #a13c32,4px 4px 0 #a13c32,4px 5px 0 #a13c32,4px 6px 0 #a13c32,4px 7px 0 #a13c32,5px -8px 0 #a13c32,5px -7px 0 #a13c32,5px -6px 0 #a13c32,5px -5px 0 #a13c32,5px -4px 0 #a13c32,5px -3px 0 #a13c32,5px -2px 0 #a13c32,5px -1px 0 #a13c32,5px 0 0 #a13c32,5px 1px 0 #a13c32,5px 2px 0 #a13c32,5px 3px 0 #a13c32,5px 4px 0 #a13c32,5px 5px 0 #a13c32,5px 6px 0 #a13c32,5px 7px 0 #a13c32,6px -8px 0 #a13c32,6px -7px 0 #a13c32,6px -6px 0 #a13c32,6px -5px 0 #a13c32,6px -4px 0 #a13c32,6px -3px 0 #a13c32,6px -2px 0 #a13c32,6px -1px 0 #a13c32,6px 0 0 #a13c32,6px 1px 0 #a13c32,6px 2px 0 #a13c32,6px 3px 0 #a13c32,6px 4px 0 #a13c32,6px 5px 0 #a13c32,6px 6px 0 #a13c32,6px 7px 0 #a13c32,7px -8px 0 #a13c32,7px -7px 0 #a13c32,7px -6px 0 #a13c32,7px -5px 0 #a13c32,7px -4px 0 #a13c32,7px -3px 0 #a13c32,7px -2px 0 #a13c32,7px -1px 0 #a13c32,7px 0 0 #a13c32,7px 1px 0 #a13c32,7px 2px 0 #a13c32,7px 3px 0 #a13c32,7px 4px 0 #a13c32,7px 5px 0 #a13c32,7px 6px 0 #a13c32,7px 7px 0 #a13c32;
  }
```

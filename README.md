<img src="https://raw.githubusercontent.com/immortal-som/postcss-text-stroke/master/img/text-stroke.png" width="810" alt="Text stroke" />

# postcss-text-stroke

## Stylesheets

```css
.foo {
	text-stroke: [size] [color] [smooth];
}
```

### Examples

in
```css
.stroke {
	text-stroke: 1 #d50200;
}
.stroke_3_smooth {
	text-stroke: 3 #ececec smooth;
}
```
out
```css
.stroke {
  	text-shadow: -1px -1px 0 #d50200,-1px 0 0 #d50200,-1px 1px 0 #d50200,0 -1px 0 #d50200,0 0 0 #d50200,0 1px 0 #d50200,1px -1px 0 #d50200,1px 0 0 #d50200,1px 1px 0 #d50200;
}
.stroke_3_smooth {
	text-shadow: -3px -3px 1px #ececec,-3px -2px 1px #ececec,-3px -1px 1px #ececec,-3px 0 1px #ececec,-3px 1px 1px #ececec,-3px 2px 1px #ececec,-3px 3px 1px #ececec,-2px -3px 1px #ececec,-2px -2px 1px #ececec,-2px -1px 1px #ececec,-2px 0 1px #ececec,-2px 1px 1px #ececec,-2px 2px 1px #ececec,-2px 3px 1px #ececec,-1px -3px 1px #ececec,-1px -2px 1px #ececec,-1px -1px 1px #ececec,-1px 0 1px #ececec,-1px 1px 1px #ececec,-1px 2px 1px #ececec,-1px 3px 1px #ececec,0 -3px 1px #ececec,0 -2px 1px #ececec,0 -1px 1px #ececec,0 0 1px #ececec,0 1px 1px #ececec,0 2px 1px #ececec,0 3px 1px #ececec,1px -3px 1px #ececec,1px -2px 1px #ececec,1px -1px 1px #ececec,1px 0 1px #ececec,1px 1px 1px #ececec,1px 2px 1px #ececec,1px 3px 1px #ececec,2px -3px 1px #ececec,2px -2px 1px #ececec,2px -1px 1px #ececec,2px 0 1px #ececec,2px 1px 1px #ececec,2px 2px 1px #ececec,2px 3px 1px #ececec,3px -3px 1px #ececec,3px -2px 1px #ececec,3px -1px 1px #ececec,3px 0 1px #ececec,3px 1px 1px #ececec,3px 2px 1px #ececec,3px 3px 1px #ececec;
}
```

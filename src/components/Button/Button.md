## Basic usage

```js
<Button>Click here</Button>
```

## Props

#### **type**

The type attribute specifies the type of button.

type: string

#### **color**

It define the button color.

type: string

- primary
- danger
- info
- success
- default

```js
<div>
    <Button color="primary">primary</Button>
    <Button color="danger">danger</Button>
    <Button color="info">info</Button>
    <Button color="success">success</Button>
    <Button color="default">default</Button>
</div>
```

#### **outline**

It define if the button is outline or filled.

type: bool

```js
<div>
    <Button color="primary" outline>primary</Button>
    <Button color="danger" outline>danger</Button>
    <Button color="info" outline>info</Button>
    <Button color="success" outline>success</Button>
    <Button color="default" outline>default</Button>
</div>
```

#### **size**

It define the button size.

type: string

- xg
- lg
- md
- sm
- xs

```js
<div>
    <Button color="primary" size="xg">Button XG</Button>
    <Button color="primary" size="lg">Button LG</Button>
    <Button color="primary" size="md">Button MD</Button>
    <Button color="primary" size="sm">Button SM</Button>
    <Button color="primary" size="xs">Button XS</Button>
</div>
```

#### **rounded**

It define the button rounded size.

type: string

- none
- sm
- md
- lg
- full

```js
<Button color="primary" rounded="lg">Button Rounded</Button>
```

#### **block**

Let the button with full width display.

type: bool

```js
<Button color="primary" block>Button Block</Button>
```

#### **icon**

If you to wish putting a icon on button.

type: string

P.S.: To more information, you should find the Icon component on styleguide sidebar.

```js
<Button color="primary" icon="arrow-right2" iconSize="md" iconColor="white">
    Button Icon
</Button>
```

#### **iconSize**

It define the icon size.

type: string

- xxs
- xs
- xsm
- sm
- md
- lg
- xlg
- xg
- xxg

#### **iconColor**

It define the button color.

type: string

- primary
- danger
- info
- success
- default

#### **iconLeft**

It should be used when you want reverse the icon side.

type: bool

#### **onClick**

It should be used to fire any method that you want.

type: function
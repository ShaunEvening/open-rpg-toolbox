::ORPG-Template{kind="Entity", name="Goblin"}
# Goblin

This thing means business. Not very good business, but it's meant, nonetheless.

:::ORPG.AttributeSet[Character Attributes]{STR=5, WIL=6}
  ::ORPG.Attribute[MyGame.Strength]{code="STR", min=5, max=10}
  ::ORPG.Attribute[MyGame.Willpower]{code="WIL", min=2, max=15}
:::

::ORPG_Gameplay[MyGame.ScenarioCombat]{module="abc123", state=State}

:::ORPG.ConditionalSet[MyGame.ScenarioResult]{module="~latest", predicate="Some Expression Here"}
  ::ORPG_ConditionalImport[/modules/bcd234.md]{case=true}
  ::ORPG_ConditionalImport[/modules/cde345.md]{case=false}
:::


/*
 * Copyright (c) 2015 TechnologyAdvice
 */

import rules from './rules'
import types from './types'
import modifiers from './modifiers'
import generators from './generators'

/**
 * This object exposes the top-level public api methods for obey
 */
export default {
  /**
   * Sets strict mode for object checking
   * @param {Boolean} flag Denotes whether or not strict-checking is enforced
   */
  strict: flag => { rules.strict = flag },
  /**
   * Returns a composed rule from a definition object
   * @param {Object} def The rule definition
   * @returns {Object}
   */
  rule: (def, strict = true) => rules.build(def, strict),

  /**
   * Returns a composed model from a definition object
   * @param {Object} obj The definition object
   * @returns {Object}
   */
  model: (obj, strict = true) => rules.build({ type: 'object', keys: obj }, strict),

  /**
   * Creates and stores (or replaces) a type
   * @param {String} name The name of the type
   * @param {Function} fn The type evaluation method
   */
  type: (name, fn) => types.add(name, fn),

  /**
   * Creates and stores a modifier
   * @param {String} name The modifier's name
   * @param {Function} fn The method for the modifier
   */
  modifier: (name, fn) => modifiers.add(name, fn),

  /**
   * Creates and stores a generator
   * @param {String} name The generator's name
   * @param {Function} fn The method for the generator
   */
  generator: (name, fn) => generators.add(name, fn)
}

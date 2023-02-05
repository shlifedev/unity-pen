
    declare namespace CS {
    //keep type incompatibility / 此属性保持类型不兼容
    const __keep_incompatibility: unique symbol;
    interface $Ref<T> {
        value: T
    }
    namespace System {
        interface Array$1<T> extends System.Array {
            get_Item(index: number):T;
            set_Item(index: number, value: T):void;
        }
    }
    interface $Task<T> {}
    namespace System {
        class Object
        {
            protected [__keep_incompatibility]: never;
        }
        class ValueType extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class Void extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        interface IFormattable
        {
        }
        interface IEquatable$1<T>
        {
        }
        class Single extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        interface ISpanFormattable
        {
        }
        interface IComparable
        {
        }
        interface IComparable$1<T>
        {
        }
        interface IConvertible
        {
        }
        class Boolean extends System.ValueType implements System.IComparable, System.IComparable$1<boolean>, System.IConvertible, System.IEquatable$1<boolean>
        {
            protected [__keep_incompatibility]: never;
        }
        class Int32 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        class String extends System.Object implements System.ICloneable, System.IComparable, System.IComparable$1<string>, System.IConvertible, System.Collections.Generic.IEnumerable$1<number>, System.Collections.IEnumerable, System.IEquatable$1<string>
        {
            protected [__keep_incompatibility]: never;
        }
        interface ICloneable
        {
        }
        class Char extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        class Array extends System.Object implements System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable, System.ICloneable, System.Collections.ICollection, System.Collections.IEnumerable, System.Collections.IList
        {
            protected [__keep_incompatibility]: never;
        }
        class Enum extends System.ValueType implements System.IFormattable, System.IComparable, System.IConvertible
        {
            protected [__keep_incompatibility]: never;
        }
        class Exception extends System.Object implements System.Runtime.Serialization.ISerializable, System.Runtime.InteropServices._Exception
        {
            protected [__keep_incompatibility]: never;
        }
        interface IFormatProvider
        {
        }
        class Type extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._MemberInfo, System.Runtime.InteropServices._Type, System.Reflection.ICustomAttributeProvider, System.Reflection.IReflect
        {
            protected [__keep_incompatibility]: never;
        }
        class UInt64 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<bigint>, System.IConvertible, System.IEquatable$1<bigint>
        {
            protected [__keep_incompatibility]: never;
        }
        class UInt16 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace UnityEngine {
        /** Class containing methods to ease debugging while developing a game.
        */
        class Debug extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** Get default debug logger.
            */
            public static get unityLogger(): UnityEngine.ILogger;
            /** Reports whether the development console is visible. The development console cannot be made to appear using:
            */
            public static get developerConsoleVisible(): boolean;
            public static set developerConsoleVisible(value: boolean);
            /** In the Build Settings dialog there is a check box called "Development Build".
            */
            public static get isDebugBuild(): boolean;
            /** Draws a line between specified start and end points.
            * @param start Point in world space where the line should start.
            * @param end Point in world space where the line should end.
            * @param color Color of the line.
            * @param duration How long the line should be visible for.
            * @param depthTest Should the line be obscured by objects closer to the camera?
            */
            public static DrawLine ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number) : void
            /** Draws a line between specified start and end points.
            * @param start Point in world space where the line should start.
            * @param end Point in world space where the line should end.
            * @param color Color of the line.
            * @param duration How long the line should be visible for.
            * @param depthTest Should the line be obscured by objects closer to the camera?
            */
            public static DrawLine ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color) : void
            /** Draws a line between specified start and end points.
            * @param start Point in world space where the line should start.
            * @param end Point in world space where the line should end.
            * @param color Color of the line.
            * @param duration How long the line should be visible for.
            * @param depthTest Should the line be obscured by objects closer to the camera?
            */
            public static DrawLine ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3) : void
            /** Draws a line between specified start and end points.
            * @param start Point in world space where the line should start.
            * @param end Point in world space where the line should end.
            * @param color Color of the line.
            * @param duration How long the line should be visible for.
            * @param depthTest Should the line be obscured by objects closer to the camera?
            */
            public static DrawLine ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number, $depthTest: boolean) : void
            /** Draws a line from start to start + dir in world coordinates.
            * @param start Point in world space where the ray should start.
            * @param dir Direction and length of the ray.
            * @param color Color of the drawn line.
            * @param duration How long the line will be visible for (in seconds).
            * @param depthTest Should the line be obscured by other objects closer to the camera?
            */
            public static DrawRay ($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number) : void
            /** Draws a line from start to start + dir in world coordinates.
            * @param start Point in world space where the ray should start.
            * @param dir Direction and length of the ray.
            * @param color Color of the drawn line.
            * @param duration How long the line will be visible for (in seconds).
            * @param depthTest Should the line be obscured by other objects closer to the camera?
            */
            public static DrawRay ($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color) : void
            /** Draws a line from start to start + dir in world coordinates.
            * @param start Point in world space where the ray should start.
            * @param dir Direction and length of the ray.
            * @param color Color of the drawn line.
            * @param duration How long the line will be visible for (in seconds).
            * @param depthTest Should the line be obscured by other objects closer to the camera?
            */
            public static DrawRay ($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3) : void
            /** Draws a line from start to start + dir in world coordinates.
            * @param start Point in world space where the ray should start.
            * @param dir Direction and length of the ray.
            * @param color Color of the drawn line.
            * @param duration How long the line will be visible for (in seconds).
            * @param depthTest Should the line be obscured by other objects closer to the camera?
            */
            public static DrawRay ($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number, $depthTest: boolean) : void
            public static Break () : void
            public static DebugBreak () : void
            /** Logs a message to the Unity Console.
            * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static Log ($message: any) : void
            /** Logs a message to the Unity Console.
            * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static Log ($message: any, $context: UnityEngine.Object) : void
            /** Logs a formatted message to the Unity Console.
            * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            * @param logType Type of message e.g. warn or error etc.
            * @param logOptions Option flags to treat the log message special.
            */
            public static LogFormat ($format: string, ...args: any[]) : void
            /** Logs a formatted message to the Unity Console.
            * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            * @param logType Type of message e.g. warn or error etc.
            * @param logOptions Option flags to treat the log message special.
            */
            public static LogFormat ($context: UnityEngine.Object, $format: string, ...args: any[]) : void
            /** Logs a formatted message to the Unity Console.
            * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            * @param logType Type of message e.g. warn or error etc.
            * @param logOptions Option flags to treat the log message special.
            */
            public static LogFormat ($logType: UnityEngine.LogType, $logOptions: UnityEngine.LogOption, $context: UnityEngine.Object, $format: string, ...args: any[]) : void
            /** A variant of Debug.Log that logs an error message to the console.
            * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static LogError ($message: any) : void
            /** A variant of Debug.Log that logs an error message to the console.
            * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static LogError ($message: any, $context: UnityEngine.Object) : void
            /** Logs a formatted error message to the Unity console.
            * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static LogErrorFormat ($format: string, ...args: any[]) : void
            /** Logs a formatted error message to the Unity console.
            * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static LogErrorFormat ($context: UnityEngine.Object, $format: string, ...args: any[]) : void
            public static ClearDeveloperConsole () : void
            /** A variant of Debug.Log that logs an error message to the console.
            * @param context Object to which the message applies.
            * @param exception Runtime Exception.
            */
            public static LogException ($exception: System.Exception) : void
            /** A variant of Debug.Log that logs an error message to the console.
            * @param context Object to which the message applies.
            * @param exception Runtime Exception.
            */
            public static LogException ($exception: System.Exception, $context: UnityEngine.Object) : void
            /** A variant of Debug.Log that logs a warning message to the console.
            * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static LogWarning ($message: any) : void
            /** A variant of Debug.Log that logs a warning message to the console.
            * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static LogWarning ($message: any, $context: UnityEngine.Object) : void
            /** Logs a formatted warning message to the Unity Console.
            * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static LogWarningFormat ($format: string, ...args: any[]) : void
            /** Logs a formatted warning message to the Unity Console.
            * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static LogWarningFormat ($context: UnityEngine.Object, $format: string, ...args: any[]) : void
            /** Assert a condition and logs an error message to the Unity console on failure.
            * @param condition Condition you expect to be true.
            * @param context Object to which the message applies.
            * @param message String or object to be converted to string representation for display.
            */
            public static Assert ($condition: boolean) : void
            /** Assert a condition and logs an error message to the Unity console on failure.
            * @param condition Condition you expect to be true.
            * @param context Object to which the message applies.
            * @param message String or object to be converted to string representation for display.
            */
            public static Assert ($condition: boolean, $context: UnityEngine.Object) : void
            /** Assert a condition and logs an error message to the Unity console on failure.
            * @param condition Condition you expect to be true.
            * @param context Object to which the message applies.
            * @param message String or object to be converted to string representation for display.
            */
            public static Assert ($condition: boolean, $message: any) : void
            public static Assert ($condition: boolean, $message: string) : void
            /** Assert a condition and logs an error message to the Unity console on failure.
            * @param condition Condition you expect to be true.
            * @param context Object to which the message applies.
            * @param message String or object to be converted to string representation for display.
            */
            public static Assert ($condition: boolean, $message: any, $context: UnityEngine.Object) : void
            public static Assert ($condition: boolean, $message: string, $context: UnityEngine.Object) : void
            /** Assert a condition and logs a formatted error message to the Unity console on failure.
            * @param condition Condition you expect to be true.
            * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static AssertFormat ($condition: boolean, $format: string, ...args: any[]) : void
            /** Assert a condition and logs a formatted error message to the Unity console on failure.
            * @param condition Condition you expect to be true.
            * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static AssertFormat ($condition: boolean, $context: UnityEngine.Object, $format: string, ...args: any[]) : void
            /** A variant of Debug.Log that logs an assertion message to the console.
            * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static LogAssertion ($message: any) : void
            /** A variant of Debug.Log that logs an assertion message to the console.
            * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static LogAssertion ($message: any, $context: UnityEngine.Object) : void
            /** Logs a formatted assertion message to the Unity console.
            * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static LogAssertionFormat ($format: string, ...args: any[]) : void
            /** Logs a formatted assertion message to the Unity console.
            * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static LogAssertionFormat ($context: UnityEngine.Object, $format: string, ...args: any[]) : void
            public constructor ()
        }
        interface ILogger extends UnityEngine.ILogHandler
        {
        }
        interface ILogHandler
        {
        }
        /** Representation of 3D vectors and points.
        */
        class Vector3 extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Vector3>
        {
            protected [__keep_incompatibility]: never;
            public static kEpsilon : number
            public static kEpsilonNormalSqrt : number
            /** X component of the vector.
            */
            public x : number
            /** Y component of the vector.
            */
            public y : number
            /** Z component of the vector.
            */
            public z : number
            /** Returns this vector with a magnitude of 1 (Read Only).
            */
            public get normalized(): UnityEngine.Vector3;
            /** Returns the length of this vector (Read Only).
            */
            public get magnitude(): number;
            /** Returns the squared length of this vector (Read Only).
            */
            public get sqrMagnitude(): number;
            /** Shorthand for writing Vector3(0, 0, 0).
            */
            public static get zero(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(1, 1, 1).
            */
            public static get one(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, 0, 1).
            */
            public static get forward(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, 0, -1).
            */
            public static get back(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, 1, 0).
            */
            public static get up(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, -1, 0).
            */
            public static get down(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(-1, 0, 0).
            */
            public static get left(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(1, 0, 0).
            */
            public static get right(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(float.PositiveInfinity, float.PositiveInfinity, float.PositiveInfinity).
            */
            public static get positiveInfinity(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(float.NegativeInfinity, float.NegativeInfinity, float.NegativeInfinity).
            */
            public static get negativeInfinity(): UnityEngine.Vector3;
            /** Spherically interpolates between two vectors.
            */
            public static Slerp ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
            /** Spherically interpolates between two vectors.
            */
            public static SlerpUnclamped ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
            /** Makes vectors normalized and orthogonal to each other.
            */
            public static OrthoNormalize ($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>) : void
            /** Makes vectors normalized and orthogonal to each other.
            */
            public static OrthoNormalize ($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>, $binormal: $Ref<UnityEngine.Vector3>) : void
            /** Rotates a vector current towards target.
            * @param current The vector being managed.
            * @param target The vector.
            * @param maxRadiansDelta The maximum angle in radians allowed for this rotation.
            * @param maxMagnitudeDelta The maximum allowed change in vector magnitude for this rotation.
            * @returns The location that RotateTowards generates. 
            */
            public static RotateTowards ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxRadiansDelta: number, $maxMagnitudeDelta: number) : UnityEngine.Vector3
            /** Linearly interpolates between two points.
            * @param a Start value, returned when t = 0.
            * @param b End value, returned when t = 1.
            * @param t Value used to interpolate between a and b.
            * @returns Interpolated value, equals to a + (b - a) * t. 
            */
            public static Lerp ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
            /** Linearly interpolates between two vectors.
            */
            public static LerpUnclamped ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
            /** Calculate a position between the points specified by current and target, moving no farther than the distance specified by maxDistanceDelta.
            * @param current The position to move from.
            * @param target The position to move towards.
            * @param maxDistanceDelta Distance to move current per call.
            * @returns The new position. 
            */
            public static MoveTowards ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxDistanceDelta: number) : UnityEngine.Vector3
            /** Gradually changes a vector towards a desired goal over time.
            * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number) : UnityEngine.Vector3
            /** Gradually changes a vector towards a desired goal over time.
            * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number) : UnityEngine.Vector3
            /** Gradually changes a vector towards a desired goal over time.
            * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : UnityEngine.Vector3
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            /** Set x, y and z components of an existing Vector3.
            */
            public Set ($newX: number, $newY: number, $newZ: number) : void
            /** Multiplies two vectors component-wise.
            */
            public static Scale ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Multiplies every component of this vector by the same component of scale.
            */
            public Scale ($scale: UnityEngine.Vector3) : void
            /** Cross Product of two vectors.
            */
            public static Cross ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Returns true if the given vector is exactly equal to this vector.
            */
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Vector3) : boolean
            /** Reflects a vector off the plane defined by a normal.
            */
            public static Reflect ($inDirection: UnityEngine.Vector3, $inNormal: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Makes this vector have a magnitude of 1.
            */
            public static Normalize ($value: UnityEngine.Vector3) : UnityEngine.Vector3
            public Normalize () : void
            /** Dot Product of two vectors.
            */
            public static Dot ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : number
            /** Projects a vector onto another vector.
            */
            public static Project ($vector: UnityEngine.Vector3, $onNormal: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Projects a vector onto a plane defined by a normal orthogonal to the plane.
            * @param planeNormal The direction from the vector towards the plane.
            * @param vector The location of the vector above the plane.
            * @returns The location of the vector on the plane. 
            */
            public static ProjectOnPlane ($vector: UnityEngine.Vector3, $planeNormal: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Calculates the angle between vectors from and.
            * @param from The vector from which the angular difference is measured.
            * @param to The vector to which the angular difference is measured.
            * @returns The angle in degrees between the two vectors. 
            */
            public static Angle ($from: UnityEngine.Vector3, $to: UnityEngine.Vector3) : number
            /** Calculates the signed angle between vectors from and to in relation to axis.
            * @param from The vector from which the angular difference is measured.
            * @param to The vector to which the angular difference is measured.
            * @param axis A vector around which the other vectors are rotated.
            * @returns Returns the signed angle between from and to in degrees. 
            */
            public static SignedAngle ($from: UnityEngine.Vector3, $to: UnityEngine.Vector3, $axis: UnityEngine.Vector3) : number
            /** Returns the distance between a and b.
            */
            public static Distance ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : number
            /** Returns a copy of vector with its magnitude clamped to maxLength.
            */
            public static ClampMagnitude ($vector: UnityEngine.Vector3, $maxLength: number) : UnityEngine.Vector3
            public static Magnitude ($vector: UnityEngine.Vector3) : number
            public static SqrMagnitude ($vector: UnityEngine.Vector3) : number
            /** Returns a vector that is made from the smallest components of two vectors.
            */
            public static Min ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Returns a vector that is made from the largest components of two vectors.
            */
            public static Max ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Addition ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Subtraction ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_UnaryNegation ($a: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Multiply ($a: UnityEngine.Vector3, $d: number) : UnityEngine.Vector3
            public static op_Multiply ($d: number, $a: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Division ($a: UnityEngine.Vector3, $d: number) : UnityEngine.Vector3
            public static op_Equality ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : boolean
            public static op_Inequality ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : boolean
            public ToString () : string
            /** Returns a formatted string for this vector.
            * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this vector.
            * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: number, $y: number, $z: number)
            public constructor ($x: number, $y: number)
        }
        /** Representation of RGBA colors.
        */
        class Color extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Color>
        {
            protected [__keep_incompatibility]: never;
        }
        /** Base class for all objects Unity can reference.
        */
        class Object extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** The type of the log message in Debug.unityLogger.Log or delegate registered with Application.RegisterLogCallback.
        */
        enum LogType
        { Error = 0, Assert = 1, Warning = 2, Log = 3, Exception = 4 }
        /** Option flags for specifying special treatment of a log message.
        */
        enum LogOption
        { None = 0, NoStacktrace = 1 }
        /** Quaternions are used to represent rotations.
        */
        class Quaternion extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Quaternion>
        {
            protected [__keep_incompatibility]: never;
            /** X component of the Quaternion. Don't modify this directly unless you know quaternions inside out.
            */
            public x : number
            /** Y component of the Quaternion. Don't modify this directly unless you know quaternions inside out.
            */
            public y : number
            /** Z component of the Quaternion. Don't modify this directly unless you know quaternions inside out.
            */
            public z : number
            /** W component of the Quaternion. Do not directly modify quaternions.
            */
            public w : number
            public static kEpsilon : number
            /** The identity rotation (Read Only).
            */
            public static get identity(): UnityEngine.Quaternion;
            /** Returns or sets the euler angle representation of the rotation.
            */
            public get eulerAngles(): UnityEngine.Vector3;
            public set eulerAngles(value: UnityEngine.Vector3);
            /** Returns this quaternion with a magnitude of 1 (Read Only).
            */
            public get normalized(): UnityEngine.Quaternion;
            /** Creates a rotation which rotates from fromDirection to toDirection.
            */
            public static FromToRotation ($fromDirection: UnityEngine.Vector3, $toDirection: UnityEngine.Vector3) : UnityEngine.Quaternion
            /** Returns the Inverse of rotation.
            */
            public static Inverse ($rotation: UnityEngine.Quaternion) : UnityEngine.Quaternion
            /** Spherically interpolates between quaternions a and b by ratio t. The parameter t is clamped to the range [0, 1].
            * @param a Start value, returned when t = 0.
            * @param b End value, returned when t = 1.
            * @param t Interpolation ratio.
            * @returns A quaternion spherically interpolated between quaternions a and b. 
            */
            public static Slerp ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion, $t: number) : UnityEngine.Quaternion
            /** Spherically interpolates between a and b by t. The parameter t is not clamped.
            */
            public static SlerpUnclamped ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion, $t: number) : UnityEngine.Quaternion
            /** Interpolates between a and b by t and normalizes the result afterwards. The parameter t is clamped to the range [0, 1].
            * @param a Start value, returned when t = 0.
            * @param b End value, returned when t = 1.
            * @param t Interpolation ratio.
            * @returns A quaternion interpolated between quaternions a and b. 
            */
            public static Lerp ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion, $t: number) : UnityEngine.Quaternion
            /** Interpolates between a and b by t and normalizes the result afterwards. The parameter t is not clamped.
            */
            public static LerpUnclamped ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion, $t: number) : UnityEngine.Quaternion
            /** Creates a rotation which rotates angle degrees around axis.
            */
            public static AngleAxis ($angle: number, $axis: UnityEngine.Vector3) : UnityEngine.Quaternion
            /** Creates a rotation with the specified forward and upwards directions.
            * @param forward The direction to look in.
            * @param upwards The vector that defines in which direction up is.
            */
            public static LookRotation ($forward: UnityEngine.Vector3, $upwards: UnityEngine.Vector3) : UnityEngine.Quaternion
            /** Creates a rotation with the specified forward and upwards directions.
            * @param forward The direction to look in.
            * @param upwards The vector that defines in which direction up is.
            */
            public static LookRotation ($forward: UnityEngine.Vector3) : UnityEngine.Quaternion
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            /** Set x, y, z and w components of an existing Quaternion.
            */
            public Set ($newX: number, $newY: number, $newZ: number, $newW: number) : void
            public static op_Multiply ($lhs: UnityEngine.Quaternion, $rhs: UnityEngine.Quaternion) : UnityEngine.Quaternion
            public static op_Multiply ($rotation: UnityEngine.Quaternion, $point: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Equality ($lhs: UnityEngine.Quaternion, $rhs: UnityEngine.Quaternion) : boolean
            public static op_Inequality ($lhs: UnityEngine.Quaternion, $rhs: UnityEngine.Quaternion) : boolean
            /** The dot product between two rotations.
            */
            public static Dot ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion) : number
            /** Creates a rotation with the specified forward and upwards directions.
            * @param view The direction to look in.
            * @param up The vector that defines in which direction up is.
            */
            public SetLookRotation ($view: UnityEngine.Vector3) : void
            /** Creates a rotation with the specified forward and upwards directions.
            * @param view The direction to look in.
            * @param up The vector that defines in which direction up is.
            */
            public SetLookRotation ($view: UnityEngine.Vector3, $up: UnityEngine.Vector3) : void
            /** Returns the angle in degrees between two rotations a and b.
            */
            public static Angle ($a: UnityEngine.Quaternion, $b: UnityEngine.Quaternion) : number
            /** Returns a rotation that rotates z degrees around the z axis, x degrees around the x axis, and y degrees around the y axis; applied in that order.
            */
            public static Euler ($x: number, $y: number, $z: number) : UnityEngine.Quaternion
            /** Returns a rotation that rotates z degrees around the z axis, x degrees around the x axis, and y degrees around the y axis.
            */
            public static Euler ($euler: UnityEngine.Vector3) : UnityEngine.Quaternion
            /** Converts a rotation to angle-axis representation (angles in degrees).
            */
            public ToAngleAxis ($angle: $Ref<number>, $axis: $Ref<UnityEngine.Vector3>) : void
            /** Creates a rotation which rotates from fromDirection to toDirection.
            */
            public SetFromToRotation ($fromDirection: UnityEngine.Vector3, $toDirection: UnityEngine.Vector3) : void
            /** Rotates a rotation from towards to.
            */
            public static RotateTowards ($from: UnityEngine.Quaternion, $to: UnityEngine.Quaternion, $maxDegreesDelta: number) : UnityEngine.Quaternion
            /** Converts this quaternion to one with the same orientation but with a magnitude of 1.
            */
            public static Normalize ($q: UnityEngine.Quaternion) : UnityEngine.Quaternion
            public Normalize () : void
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Quaternion) : boolean
            public ToString () : string
            /** Returns a formatted string for this quaternion.
            * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this quaternion.
            * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: number, $y: number, $z: number, $w: number)
        }
        /** Base class for all entities in Unity Scenes.
        */
        class GameObject extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
            /** The Transform attached to this GameObject.
            */
            public get transform(): UnityEngine.Transform;
            /** The layer the GameObject is in.
            */
            public get layer(): number;
            public set layer(value: number);
            /** The local active state of this GameObject. (Read Only)
            */
            public get activeSelf(): boolean;
            /** Defines whether the GameObject is active in the Scene.
            */
            public get activeInHierarchy(): boolean;
            /** Gets and sets the GameObject's StaticEditorFlags.
            */
            public get isStatic(): boolean;
            public set isStatic(value: boolean);
            /** The tag of this game object.
            */
            public get tag(): string;
            public set tag(value: string);
            /** Scene that the GameObject is part of.
            */
            public get scene(): UnityEngine.SceneManagement.Scene;
            /** Scene culling mask Unity uses to determine which scene to render the GameObject in.
            */
            public get sceneCullingMask(): bigint;
            public get gameObject(): UnityEngine.GameObject;
            /** Creates a game object with a primitive mesh renderer and appropriate collider.
            * @param type The type of primitive object to create.
            */
            public static CreatePrimitive ($type: UnityEngine.PrimitiveType) : UnityEngine.GameObject
            /** Returns the component of Type type if the game object has one attached, null if it doesn't.
            * @param type The type of Component to retrieve.
            */
            public GetComponent ($type: System.Type) : UnityEngine.Component
            /** Returns the component with name type if the GameObject has one attached, null if it doesn't.
            * @param type The type of Component to retrieve.
            */
            public GetComponent ($type: string) : UnityEngine.Component
            /** Returns the component of Type type in the GameObject or any of its children using depth first search.
            * @param type The type of Component to retrieve.
            * @returns A component of the matching type, if found. 
            */
            public GetComponentInChildren ($type: System.Type, $includeInactive: boolean) : UnityEngine.Component
            /** Returns the component of Type type in the GameObject or any of its children using depth first search.
            * @param type The type of Component to retrieve.
            * @returns A component of the matching type, if found. 
            */
            public GetComponentInChildren ($type: System.Type) : UnityEngine.Component
            /** Retrieves the component of Type type in the GameObject or any of its parents.
            * @param type Type of component to find.
            * @returns Returns a component if a component matching the type is found. Returns null otherwise. 
            */
            public GetComponentInParent ($type: System.Type, $includeInactive: boolean) : UnityEngine.Component
            /** Retrieves the component of Type type in the GameObject or any of its parents.
            * @param type Type of component to find.
            * @returns Returns a component if a component matching the type is found. Returns null otherwise. 
            */
            public GetComponentInParent ($type: System.Type) : UnityEngine.Component
            /** Returns all components of Type type in the GameObject.
            * @param type The type of component to retrieve.
            */
            public GetComponents ($type: System.Type) : System.Array$1<UnityEngine.Component>
            public GetComponents ($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>) : void
            /** Returns all components of Type type in the GameObject or any of its children children using depth first search. Works recursively.
            * @param type The type of Component to retrieve.
            * @param includeInactive Should Components on inactive GameObjects be included in the found set?
            */
            public GetComponentsInChildren ($type: System.Type) : System.Array$1<UnityEngine.Component>
            /** Returns all components of Type type in the GameObject or any of its children children using depth first search. Works recursively.
            * @param type The type of Component to retrieve.
            * @param includeInactive Should Components on inactive GameObjects be included in the found set?
            */
            public GetComponentsInChildren ($type: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
            public GetComponentsInParent ($type: System.Type) : System.Array$1<UnityEngine.Component>
            /** Returns all components of Type type in the GameObject or any of its parents.
            * @param type The type of Component to retrieve.
            * @param includeInactive Should inactive Components be included in the found set?
            */
            public GetComponentsInParent ($type: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
            /** Gets the component of the specified type, if it exists.
            * @param type The type of component to retrieve.
            * @param component The output argument that will contain the component or null.
            * @returns Returns true if the component is found, false otherwise. 
            */
            public TryGetComponent ($type: System.Type, $component: $Ref<UnityEngine.Component>) : boolean
            /** Returns one active GameObject tagged tag. Returns null if no GameObject was found.
            * @param tag The tag to search for.
            */
            public static FindWithTag ($tag: string) : UnityEngine.GameObject
            public SendMessageUpwards ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            public SendMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            public BroadcastMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            /** Adds a component class of type componentType to the game object. C# Users can use a generic version.
            */
            public AddComponent ($componentType: System.Type) : UnityEngine.Component
            /** ActivatesDeactivates the GameObject, depending on the given true or false/ value.
            * @param value Activate or deactivate the object, where true activates the GameObject and false deactivates the GameObject.
            */
            public SetActive ($value: boolean) : void
            /** Is this game object tagged with tag ?
            * @param tag The tag to compare.
            */
            public CompareTag ($tag: string) : boolean
            public static FindGameObjectWithTag ($tag: string) : UnityEngine.GameObject
            /** Returns an array of active GameObjects tagged tag. Returns empty array if no GameObject was found.
            * @param tag The name of the tag to search GameObjects for.
            */
            public static FindGameObjectsWithTag ($tag: string) : System.Array$1<UnityEngine.GameObject>
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour.
            * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessageUpwards ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour.
            * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessageUpwards ($methodName: string, $value: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour.
            * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessageUpwards ($methodName: string) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object.
            * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessage ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object.
            * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessage ($methodName: string, $value: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object.
            * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessage ($methodName: string) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children.
            */
            public BroadcastMessage ($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children.
            */
            public BroadcastMessage ($methodName: string, $parameter: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children.
            */
            public BroadcastMessage ($methodName: string) : void
            /** Finds a GameObject by name and returns it.
            */
            public static Find ($name: string) : UnityEngine.GameObject
            public constructor ($name: string)
            public constructor ()
            public constructor ($name: string, ...components: System.Type[])
        }
        /** The various primitives that can be created using the GameObject.CreatePrimitive function.
        */
        enum PrimitiveType
        { Sphere = 0, Capsule = 1, Cylinder = 2, Cube = 3, Plane = 4, Quad = 5 }
        /** Base class for everything attached to a GameObject.
        */
        class Component extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** Options for how to send a message.
        */
        enum SendMessageOptions
        { RequireReceiver = 0, DontRequireReceiver = 1 }
        /** Position, rotation and scale of an object.
        */
        class Transform extends UnityEngine.Component implements System.Collections.IEnumerable
        {
            protected [__keep_incompatibility]: never;
            /** The world space position of the Transform.
            */
            public get position(): UnityEngine.Vector3;
            public set position(value: UnityEngine.Vector3);
            /** Position of the transform relative to the parent transform.
            */
            public get localPosition(): UnityEngine.Vector3;
            public set localPosition(value: UnityEngine.Vector3);
            /** The rotation as Euler angles in degrees.
            */
            public get eulerAngles(): UnityEngine.Vector3;
            public set eulerAngles(value: UnityEngine.Vector3);
            /** The rotation as Euler angles in degrees relative to the parent transform's rotation.
            */
            public get localEulerAngles(): UnityEngine.Vector3;
            public set localEulerAngles(value: UnityEngine.Vector3);
            /** The red axis of the transform in world space.
            */
            public get right(): UnityEngine.Vector3;
            public set right(value: UnityEngine.Vector3);
            /** The green axis of the transform in world space.
            */
            public get up(): UnityEngine.Vector3;
            public set up(value: UnityEngine.Vector3);
            /** Returns a normalized vector representing the blue axis of the transform in world space.
            */
            public get forward(): UnityEngine.Vector3;
            public set forward(value: UnityEngine.Vector3);
            /** A Quaternion that stores the rotation of the Transform in world space.
            */
            public get rotation(): UnityEngine.Quaternion;
            public set rotation(value: UnityEngine.Quaternion);
            /** The rotation of the transform relative to the transform rotation of the parent.
            */
            public get localRotation(): UnityEngine.Quaternion;
            public set localRotation(value: UnityEngine.Quaternion);
            /** The scale of the transform relative to the GameObjects parent.
            */
            public get localScale(): UnityEngine.Vector3;
            public set localScale(value: UnityEngine.Vector3);
            /** The parent of the transform.
            */
            public get parent(): UnityEngine.Transform;
            public set parent(value: UnityEngine.Transform);
            /** Matrix that transforms a point from world space into local space (Read Only).
            */
            public get worldToLocalMatrix(): UnityEngine.Matrix4x4;
            /** Matrix that transforms a point from local space into world space (Read Only).
            */
            public get localToWorldMatrix(): UnityEngine.Matrix4x4;
            /** Returns the topmost transform in the hierarchy.
            */
            public get root(): UnityEngine.Transform;
            /** The number of children the parent Transform has.
            */
            public get childCount(): number;
            /** The global scale of the object (Read Only).
            */
            public get lossyScale(): UnityEngine.Vector3;
            /** Has the transform changed since the last time the flag was set to 'false'?
            */
            public get hasChanged(): boolean;
            public set hasChanged(value: boolean);
            /** The transform capacity of the transform's hierarchy data structure.
            */
            public get hierarchyCapacity(): number;
            public set hierarchyCapacity(value: number);
            /** The number of transforms in the transform's hierarchy data structure.
            */
            public get hierarchyCount(): number;
            /** Set the parent of the transform.
            * @param parent The parent Transform to use.
            * @param worldPositionStays If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before.
            */
            public SetParent ($p: UnityEngine.Transform) : void
            /** Set the parent of the transform.
            * @param parent The parent Transform to use.
            * @param worldPositionStays If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before.
            */
            public SetParent ($parent: UnityEngine.Transform, $worldPositionStays: boolean) : void
            /** Sets the world space position and rotation of the Transform component.
            */
            public SetPositionAndRotation ($position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : void
            /** Sets the position and rotation of the Transform component in local space (i.e. relative to its parent transform).
            */
            public SetLocalPositionAndRotation ($localPosition: UnityEngine.Vector3, $localRotation: UnityEngine.Quaternion) : void
            /** Gets the position and rotation of the Transform component in world space.
            */
            public GetPositionAndRotation ($position: $Ref<UnityEngine.Vector3>, $rotation: $Ref<UnityEngine.Quaternion>) : void
            /** Gets the position and rotation of the Transform component in local space (that is, relative to its parent transform).
            */
            public GetLocalPositionAndRotation ($localPosition: $Ref<UnityEngine.Vector3>, $localRotation: $Ref<UnityEngine.Quaternion>) : void
            /** Moves the transform in the direction and distance of translation.
            */
            public Translate ($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Space) : void
            /** Moves the transform in the direction and distance of translation.
            */
            public Translate ($translation: UnityEngine.Vector3) : void
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis.
            */
            public Translate ($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Space) : void
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis.
            */
            public Translate ($x: number, $y: number, $z: number) : void
            /** Moves the transform in the direction and distance of translation.
            */
            public Translate ($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Transform) : void
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis.
            */
            public Translate ($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Transform) : void
            /** Applies a rotation of eulerAngles.z degrees around the z-axis, eulerAngles.x degrees around the x-axis, and eulerAngles.y degrees around the y-axis (in that order).
            * @param eulers The rotation to apply in euler angles.
            * @param relativeTo Determines whether to rotate the GameObject either locally to  the GameObject or relative to the Scene in world space.
            */
            public Rotate ($eulers: UnityEngine.Vector3, $relativeTo: UnityEngine.Space) : void
            /** Applies a rotation of eulerAngles.z degrees around the z-axis, eulerAngles.x degrees around the x-axis, and eulerAngles.y degrees around the y-axis (in that order).
            * @param eulers The rotation to apply in euler angles.
            */
            public Rotate ($eulers: UnityEngine.Vector3) : void
            /** The implementation of this method applies a rotation of zAngle degrees around the z axis, xAngle degrees around the x axis, and yAngle degrees around the y axis (in that order).
            * @param relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
            * @param xAngle Degrees to rotate the GameObject around the X axis.
            * @param yAngle Degrees to rotate the GameObject around the Y axis.
            * @param zAngle Degrees to rotate the GameObject around the Z axis.
            */
            public Rotate ($xAngle: number, $yAngle: number, $zAngle: number, $relativeTo: UnityEngine.Space) : void
            /** The implementation of this method applies a rotation of zAngle degrees around the z axis, xAngle degrees around the x axis, and yAngle degrees around the y axis (in that order).
            * @param xAngle Degrees to rotate the GameObject around the X axis.
            * @param yAngle Degrees to rotate the GameObject around the Y axis.
            * @param zAngle Degrees to rotate the GameObject around the Z axis.
            */
            public Rotate ($xAngle: number, $yAngle: number, $zAngle: number) : void
            /** Rotates the object around the given axis by the number of degrees defined by the given angle.
            * @param angle The degrees of rotation to apply.
            * @param axis The axis to apply rotation to.
            * @param relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
            */
            public Rotate ($axis: UnityEngine.Vector3, $angle: number, $relativeTo: UnityEngine.Space) : void
            /** Rotates the object around the given axis by the number of degrees defined by the given angle.
            * @param axis The axis to apply rotation to.
            * @param angle The degrees of rotation to apply.
            */
            public Rotate ($axis: UnityEngine.Vector3, $angle: number) : void
            /** Rotates the transform about axis passing through point in world coordinates by angle degrees.
            */
            public RotateAround ($point: UnityEngine.Vector3, $axis: UnityEngine.Vector3, $angle: number) : void
            /** Rotates the transform so the forward vector points at target's current position.
            * @param target Object to point towards.
            * @param worldUp Vector specifying the upward direction.
            */
            public LookAt ($target: UnityEngine.Transform, $worldUp: UnityEngine.Vector3) : void
            /** Rotates the transform so the forward vector points at target's current position.
            * @param target Object to point towards.
            * @param worldUp Vector specifying the upward direction.
            */
            public LookAt ($target: UnityEngine.Transform) : void
            /** Rotates the transform so the forward vector points at worldPosition.
            * @param worldPosition Point to look at.
            * @param worldUp Vector specifying the upward direction.
            */
            public LookAt ($worldPosition: UnityEngine.Vector3, $worldUp: UnityEngine.Vector3) : void
            /** Rotates the transform so the forward vector points at worldPosition.
            * @param worldPosition Point to look at.
            * @param worldUp Vector specifying the upward direction.
            */
            public LookAt ($worldPosition: UnityEngine.Vector3) : void
            /** Transforms direction from local space to world space.
            */
            public TransformDirection ($direction: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms direction x, y, z from local space to world space.
            */
            public TransformDirection ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms a direction from world space to local space. The opposite of Transform.TransformDirection.
            */
            public InverseTransformDirection ($direction: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms the direction x, y, z from world space to local space. The opposite of Transform.TransformDirection.
            */
            public InverseTransformDirection ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms vector from local space to world space.
            */
            public TransformVector ($vector: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms vector x, y, z from local space to world space.
            */
            public TransformVector ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms a vector from world space to local space. The opposite of Transform.TransformVector.
            */
            public InverseTransformVector ($vector: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms the vector x, y, z from world space to local space. The opposite of Transform.TransformVector.
            */
            public InverseTransformVector ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms position from local space to world space.
            */
            public TransformPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms the position x, y, z from local space to world space.
            */
            public TransformPoint ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms position from world space to local space.
            */
            public InverseTransformPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms the position x, y, z from world space to local space. The opposite of Transform.TransformPoint.
            */
            public InverseTransformPoint ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            public DetachChildren () : void
            public SetAsFirstSibling () : void
            public SetAsLastSibling () : void
            /** Sets the sibling index.
            * @param index Index to set.
            */
            public SetSiblingIndex ($index: number) : void
            public GetSiblingIndex () : number
            /** Finds a child by name n and returns it.
            * @param n Name of child to be found.
            * @returns The found child transform. Null if child with matching name isn't found. 
            */
            public Find ($n: string) : UnityEngine.Transform
            /** Is this transform a child of parent?
            */
            public IsChildOf ($parent: UnityEngine.Transform) : boolean
            public GetEnumerator () : System.Collections.IEnumerator
            /** Returns a transform child by index.
            * @param index Index of the child transform to return. Must be smaller than Transform.childCount.
            * @returns Transform child by index. 
            */
            public GetChild ($index: number) : UnityEngine.Transform
        }
        /** A standard 4x4 transformation matrix.
        */
        class Matrix4x4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Matrix4x4>
        {
            protected [__keep_incompatibility]: never;
        }
        /** The coordinate space in which to operate.
        */
        enum Space
        { World = 0, Self = 1 }
        /** Easily generate random data for games.
        */
        class Random extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** Gets or sets the full internal state of the random number generator.
            */
            public static get state(): UnityEngine.Random.State;
            public static set state(value: UnityEngine.Random.State);
            /** Returns a random float within [0.0..1.0] (range is inclusive) (Read Only).
            */
            public static get value(): number;
            /** Returns a random point inside or on a sphere with radius 1.0 (Read Only).
            */
            public static get insideUnitSphere(): UnityEngine.Vector3;
            /** Returns a random point inside or on a circle with radius 1.0 (Read Only).
            */
            public static get insideUnitCircle(): UnityEngine.Vector2;
            /** Returns a random point on the surface of a sphere with radius 1.0 (Read Only).
            */
            public static get onUnitSphere(): UnityEngine.Vector3;
            /** Returns a random rotation (Read Only).
            */
            public static get rotation(): UnityEngine.Quaternion;
            /** Returns a random rotation with uniform distribution (Read Only).
            */
            public static get rotationUniform(): UnityEngine.Quaternion;
            /** Initializes the random number generator state with a seed.
            * @param seed Seed used to initialize the random number generator.
            */
            public static InitState ($seed: number) : void
            /** Returns a random float within [minInclusive..maxInclusive] (range is inclusive).
            */
            public static Range ($minInclusive: number, $maxInclusive: number) : number
            /** Return a random int within [minInclusive..maxExclusive) (Read Only).
            */
            public static Range ($minInclusive: number, $maxExclusive: number) : number
            public static ColorHSV () : UnityEngine.Color
            /** Generates a random color from HSV and alpha ranges.
            * @param hueMin Minimum hue [0..1].
            * @param hueMax Maximum hue [0..1].
            * @param saturationMin Minimum saturation [0..1].
            * @param saturationMax Maximum saturation [0..1].
            * @param valueMin Minimum value [0..1].
            * @param valueMax Maximum value [0..1].
            * @param alphaMin Minimum alpha [0..1].
            * @param alphaMax Maximum alpha [0..1].
            * @returns A random color with HSV and alpha values in the (inclusive) input ranges. Values for each component are derived via linear interpolation of value. 
            */
            public static ColorHSV ($hueMin: number, $hueMax: number) : UnityEngine.Color
            /** Generates a random color from HSV and alpha ranges.
            * @param hueMin Minimum hue [0..1].
            * @param hueMax Maximum hue [0..1].
            * @param saturationMin Minimum saturation [0..1].
            * @param saturationMax Maximum saturation [0..1].
            * @param valueMin Minimum value [0..1].
            * @param valueMax Maximum value [0..1].
            * @param alphaMin Minimum alpha [0..1].
            * @param alphaMax Maximum alpha [0..1].
            * @returns A random color with HSV and alpha values in the (inclusive) input ranges. Values for each component are derived via linear interpolation of value. 
            */
            public static ColorHSV ($hueMin: number, $hueMax: number, $saturationMin: number, $saturationMax: number) : UnityEngine.Color
            /** Generates a random color from HSV and alpha ranges.
            * @param hueMin Minimum hue [0..1].
            * @param hueMax Maximum hue [0..1].
            * @param saturationMin Minimum saturation [0..1].
            * @param saturationMax Maximum saturation [0..1].
            * @param valueMin Minimum value [0..1].
            * @param valueMax Maximum value [0..1].
            * @param alphaMin Minimum alpha [0..1].
            * @param alphaMax Maximum alpha [0..1].
            * @returns A random color with HSV and alpha values in the (inclusive) input ranges. Values for each component are derived via linear interpolation of value. 
            */
            public static ColorHSV ($hueMin: number, $hueMax: number, $saturationMin: number, $saturationMax: number, $valueMin: number, $valueMax: number) : UnityEngine.Color
            /** Generates a random color from HSV and alpha ranges.
            * @param hueMin Minimum hue [0..1].
            * @param hueMax Maximum hue [0..1].
            * @param saturationMin Minimum saturation [0..1].
            * @param saturationMax Maximum saturation [0..1].
            * @param valueMin Minimum value [0..1].
            * @param valueMax Maximum value [0..1].
            * @param alphaMin Minimum alpha [0..1].
            * @param alphaMax Maximum alpha [0..1].
            * @returns A random color with HSV and alpha values in the (inclusive) input ranges. Values for each component are derived via linear interpolation of value. 
            */
            public static ColorHSV ($hueMin: number, $hueMax: number, $saturationMin: number, $saturationMax: number, $valueMin: number, $valueMax: number, $alphaMin: number, $alphaMax: number) : UnityEngine.Color
        }
        /** Representation of 2D vectors and points.
        */
        class Vector2 extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Vector2>
        {
            protected [__keep_incompatibility]: never;
        }
        /** A collection of common math functions.
        */
        class Mathf extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            /** The well-known 3.14159265358979... value (Read Only).
            */
            public static PI : number
            /** A representation of positive infinity (Read Only).
            */
            public static Infinity : number
            /** A representation of negative infinity (Read Only).
            */
            public static NegativeInfinity : number
            /** Degrees-to-radians conversion constant (Read Only).
            */
            public static Deg2Rad : number
            /** Radians-to-degrees conversion constant (Read Only).
            */
            public static Rad2Deg : number
            /** A tiny floating point value (Read Only).
            */
            public static Epsilon : number
            /** Returns the closest power of two value.
            */
            public static ClosestPowerOfTwo ($value: number) : number
            /** Returns true if the value is power of two.
            */
            public static IsPowerOfTwo ($value: number) : boolean
            /** Returns the next power of two that is equal to, or greater than, the argument.
            */
            public static NextPowerOfTwo ($value: number) : number
            /** Converts the given value from gamma (sRGB) to linear color space.
            */
            public static GammaToLinearSpace ($value: number) : number
            /** Converts the given value from linear to gamma (sRGB) color space.
            */
            public static LinearToGammaSpace ($value: number) : number
            /** Convert a color temperature in Kelvin to RGB color.
            * @param kelvin Temperature in Kelvin. Range 1000 to 40000 Kelvin.
            * @returns Correlated Color Temperature as floating point RGB color. 
            */
            public static CorrelatedColorTemperatureToRGB ($kelvin: number) : UnityEngine.Color
            /** Encode a floating point value into a 16-bit representation.
            * @param val The floating point value to convert.
            * @returns The converted half-precision float, stored in a 16-bit unsigned integer. 
            */
            public static FloatToHalf ($val: number) : number
            /** Convert a half precision float to a 32-bit floating point value.
            * @param val The half precision value to convert.
            * @returns The decoded 32-bit float. 
            */
            public static HalfToFloat ($val: number) : number
            /** Generate 2D Perlin noise.
            * @param x X-coordinate of sample point.
            * @param y Y-coordinate of sample point.
            * @returns Value between 0.0 and 1.0. (Return value might be slightly below 0.0 or beyond 1.0.) 
            */
            public static PerlinNoise ($x: number, $y: number) : number
            /** Returns the sine of angle f.
            * @param f The input angle, in radians.
            * @returns The return value between -1 and +1. 
            */
            public static Sin ($f: number) : number
            /** Returns the cosine of angle f.
            * @param f The input angle, in radians.
            * @returns The return value between -1 and 1. 
            */
            public static Cos ($f: number) : number
            /** Returns the tangent of angle f in radians.
            */
            public static Tan ($f: number) : number
            /** Returns the arc-sine of f - the angle in radians whose sine is f.
            */
            public static Asin ($f: number) : number
            /** Returns the arc-cosine of f - the angle in radians whose cosine is f.
            */
            public static Acos ($f: number) : number
            /** Returns the arc-tangent of f - the angle in radians whose tangent is f.
            */
            public static Atan ($f: number) : number
            /** Returns the angle in radians whose Tan is y/x.
            */
            public static Atan2 ($y: number, $x: number) : number
            /** Returns square root of f.
            */
            public static Sqrt ($f: number) : number
            /** Returns the absolute value of f.
            */
            public static Abs ($f: number) : number
            /** Returns the absolute value of value.
            */
            public static Abs ($value: number) : number
            /** Returns the smallest of two or more values.
            */
            public static Min ($a: number, $b: number) : number
            /** Returns the smallest of two or more values.
            */
            public static Min (...values: number[]) : number
            /** Returns largest of two or more values.
            */
            public static Max ($a: number, $b: number) : number
            /** Returns largest of two or more values.
            */
            public static Max (...values: number[]) : number
            /** Returns f raised to power p.
            */
            public static Pow ($f: number, $p: number) : number
            /** Returns e raised to the specified power.
            */
            public static Exp ($power: number) : number
            /** Returns the logarithm of a specified number in a specified base.
            */
            public static Log ($f: number, $p: number) : number
            /** Returns the natural (base e) logarithm of a specified number.
            */
            public static Log ($f: number) : number
            /** Returns the base 10 logarithm of a specified number.
            */
            public static Log10 ($f: number) : number
            /** Returns the smallest integer greater to or equal to f.
            */
            public static Ceil ($f: number) : number
            /** Returns the largest integer smaller than or equal to f.
            */
            public static Floor ($f: number) : number
            /** Returns f rounded to the nearest integer.
            */
            public static Round ($f: number) : number
            /** Returns the smallest integer greater to or equal to f.
            */
            public static CeilToInt ($f: number) : number
            /** Returns the largest integer smaller to or equal to f.
            */
            public static FloorToInt ($f: number) : number
            /** Returns f rounded to the nearest integer.
            */
            public static RoundToInt ($f: number) : number
            /** Returns the sign of f.
            */
            public static Sign ($f: number) : number
            /** Clamps the given value between the given minimum float and maximum float values.  Returns the given value if it is within the minimum and maximum range.
            * @param value The floating point value to restrict inside the range defined by the minimum and maximum values.
            * @param min The minimum floating point value to compare against.
            * @param max The maximum floating point value to compare against.
            * @returns The float result between the minimum and maximum values. 
            */
            public static Clamp ($value: number, $min: number, $max: number) : number
            /** Clamps value between 0 and 1 and returns value.
            */
            public static Clamp01 ($value: number) : number
            /** Linearly interpolates between a and b by t.
            * @param a The start value.
            * @param b The end value.
            * @param t The interpolation value between the two floats.
            * @returns The interpolated float result between the two float values. 
            */
            public static Lerp ($a: number, $b: number, $t: number) : number
            /** Linearly interpolates between a and b by t with no limit to t.
            * @param a The start value.
            * @param b The end value.
            * @param t The interpolation between the two floats.
            * @returns The float value as a result from the linear interpolation. 
            */
            public static LerpUnclamped ($a: number, $b: number, $t: number) : number
            /** Same as Lerp but makes sure the values interpolate correctly when they wrap around 360 degrees.
            */
            public static LerpAngle ($a: number, $b: number, $t: number) : number
            /** Moves a value current towards target.
            * @param current The current value.
            * @param target The value to move towards.
            * @param maxDelta The maximum change that should be applied to the value.
            */
            public static MoveTowards ($current: number, $target: number, $maxDelta: number) : number
            /** Same as MoveTowards but makes sure the values interpolate correctly when they wrap around 360 degrees.
            */
            public static MoveTowardsAngle ($current: number, $target: number, $maxDelta: number) : number
            /** Interpolates between min and max with smoothing at the limits.
            */
            public static SmoothStep ($from: number, $to: number, $t: number) : number
            public static Gamma ($value: number, $absmax: number, $gamma: number) : number
            /** Compares two floating point values and returns true if they are similar.
            */
            public static Approximately ($a: number, $b: number) : boolean
            /** Gradually changes a value towards a desired goal over time.
            * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number, $maxSpeed: number) : number
            /** Gradually changes a value towards a desired goal over time.
            * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number) : number
            /** Gradually changes a value towards a desired goal over time.
            * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : number
            /** Gradually changes an angle given in degrees towards a desired goal angle over time.
            * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDampAngle ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number, $maxSpeed: number) : number
            /** Gradually changes an angle given in degrees towards a desired goal angle over time.
            * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDampAngle ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number) : number
            /** Gradually changes an angle given in degrees towards a desired goal angle over time.
            * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDampAngle ($current: number, $target: number, $currentVelocity: $Ref<number>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : number
            /** Loops the value t, so that it is never larger than length and never smaller than 0.
            */
            public static Repeat ($t: number, $length: number) : number
            /** PingPong returns a value that will increment and decrement between the value 0 and length.
            */
            public static PingPong ($t: number, $length: number) : number
            /** Determines where a value lies between two points.
            * @param a The start of the range.
            * @param b The end of the range.
            * @param value The point within the range you want to calculate.
            * @returns A value between zero and one, representing where the "value" parameter falls within the range defined by a and b. 
            */
            public static InverseLerp ($a: number, $b: number, $value: number) : number
            /** Calculates the shortest difference between two given angles given in degrees.
            */
            public static DeltaAngle ($current: number, $target: number) : number
        }
    }
    namespace System.Collections.Generic {
        interface IEnumerable$1<T> extends System.Collections.IEnumerable
        {
        }
        interface IReadOnlyList$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<T>
        {
        }
        interface IReadOnlyCollection$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
        {
        }
        interface IList$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.ICollection$1<T>
        {
        }
        interface ICollection$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
        {
        }
        class List$1<T> extends System.Object implements System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.IList, System.Collections.Generic.ICollection$1<T>
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace System.Collections {
        interface IEnumerable
        {
        }
        interface IStructuralComparable
        {
        }
        interface IStructuralEquatable
        {
        }
        interface ICollection extends System.Collections.IEnumerable
        {
        }
        interface IList extends System.Collections.ICollection, System.Collections.IEnumerable
        {
        }
        interface IEnumerator
        {
        }
    }
    namespace System.Runtime.Serialization {
        interface ISerializable
        {
        }
    }
    namespace System.Runtime.InteropServices {
        interface _Exception
        {
        }
        interface _MemberInfo
        {
        }
        interface _Type
        {
        }
    }
    namespace System.Reflection {
        class MemberInfo extends System.Object implements System.Runtime.InteropServices._MemberInfo, System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        interface ICustomAttributeProvider
        {
        }
        interface IReflect
        {
        }
    }
    namespace UnityEngine.SceneManagement {
        /** Run-time data structure for *.unity file.
        */
        class Scene extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace UnityEngine.Random {
        class State extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
    }
}
